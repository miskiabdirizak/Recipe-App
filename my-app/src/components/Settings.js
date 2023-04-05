import "./Settings.css"
import { useState } from "react";
import Navbar from "./Nav";

function Settings() {

const options = [
{
    header: {
        name: "Account",
    },
    values:[
        {
            name: "Profile",
            description:"Update email address and profile picture",
        },

        {
        name: "Password",
        description:"Change password",
        },
        {
            name: "Delete Account",
            description: "Permanently erase all user history and close account. "
        }
    ],
},
{
    header: {
        name: "Applications",
    },
    values:[
        {
            name: "Third-party Services",
            description:" "
        }
    ]
},
{
    header: {
        name: "Support",
    },
    values: [
        {
            name: "Help",
            description: "Having trouble",
            tags: [],

        },
        {
            name: "FAQ",
            description: "View our frequently asked questions",
            tags: [],
        },
    ]
}

]

const [visibleOptions, setVisibleOptions]= useState(options);

const onChange=(e)=>{
    e.preventDefault();
    const value = e.target.value;
    console.log("value",value);
    
    if(value.trim().length === 0){
        setVisibleOptions(options);
        return;
    }
    const returnedItems =[];
    visibleOptions.forEach((option, index) =>{
        const foundOptions=option.values.filter(item=>{
            return item.name.toLocaleLowerCase().search(value.trim().toLowerCase())!==-1 ||item.description.toLocaleLowerCase().search(value.trim().toLowerCase())!==-1;
        });
        
    returnedItems[index]={
        header:{
            name: option.header.name,
        },
        values: foundOptions,
     };
    
     if(option.header.name
        .toLocaleLowerCase()
        .search(value.trim().toLowerCase())!==-1
        ){
            returnedItems[index]={
                header:{
                    name: option.header.name,
                },
                values: options[index].values,
            } ;
        }
    });

    setVisibleOptions(returnedItems)

};

return (
    <div classname="Settings">
        <Navbar/>
        <div className="container my-5">
            <h1>
                <span>
                    <button className="btn btn-secondary">
                    {" "}
                    <span>&lt;</span>Back{" "}
                    </button>{" "}
                    Settings
                    </span>
            </h1>
            <input
                type = "text"
                className="form-control mt-5"
                onChange={onChange}
                placeholder="Search.."
            />
            <div>
                
                {visibleOptions.map((option) => (
                <div key={option.header.name} className="mt-5 mt-2">
                    <h3>{option.header.name}</h3>
                    
                    <div>
                        {option.values.map((value) => (
                            <div key = {value.name}>
                                <ul className="list-group">
                                    <li className="list-group-item mb-2">
                                        <h6 className="font-weight-bold">{value.name} </h6>
                                        <p>{value.description}</p>
                                    </li>
                                </ul>
                            </div>
                        ))}         
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>

);

}

export default Settings;