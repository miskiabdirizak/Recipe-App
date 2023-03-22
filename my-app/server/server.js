import express from "express"
import axios from "axios"
import cors from "cors"
import "dotenv/config"
import db from "../Database/DB.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/recipes/:query', async (req, res) => {
    const response = await axios.get(
        `https://api.edamam.com/search?q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    )
    console.log(response.data.hits)
    res.json(response.data.hits)
})
/* REGISTERATION sql code


app.get('/account',async (req,res)=>{
    
    const password = req.query.password
    const email = req.query.email
    console.log(password)
    db.connect((err)=>{
        if (err)
        throw err
        console.log("connected")
    });
    db.query(`INSERT INTO info (email,password) VALUES ("${email}","${password}");`
    ,(error,results,fields)=>{
        if(error)throw error
        console.log(results)
    }
    );

    db.end()
})
*/
app.get('/login', async (req,res)=>{
    const password = req.query.password
    const email = req.query.email

    db.query(`SELECT * FROM info WHERE password = "${password}" AND email = "${email}";`,(error,results,fields)=>{
        if(error)throw error
        //passing the result object into values to get the value
        console.log(results)
        if(results.length()>0){
            console.log("logged in")
        }else{
            console.log("Incorrect Username and/or Password!")
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})