import { Link,useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from "./Nav";
import foodpng from "./fruit.png"
import Button from 'react-bootstrap/Button';
import Divider from "@mui/material/Divider"
import { Row,Col
,Container, 
ListGroupItem} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Footer from "./Footer.js"
import { useEffect,useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { SvgIcon } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import EggAltTwoToneIcon from '@mui/icons-material/EggAltTwoTone';
import { firestore } from "../firebase/firebase";
const Pop = (type) =>{
return (
<Popover id="popover-basic">
<Popover.Header as="h3">This ingredient is </Popover.Header>
<Popover.Body>
  {type}
</Popover.Body>
</Popover>)}
const RecipePage = (val, onFavoritedRecipe, favorite)=>{
    const [ingredients,setIngredients] = useState([])
    const [ isFavorited, setIsFavorited ] = useState(favorite)
    const handleFavoritedChange = () => {
        setIsFavorited(isFavorited => !isFavorited)
        fetch(`http://localhost:3000/recipes`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({favorite: !favorite})
        })
            .then(response => response.json())
            .then((updatedRecipe)=> onFavoritedRecipe(updatedRecipe))
            // .then(updatedResort => setIsFavorited ? onFavoritedResort(updatedResort) : onUnfavoriteResort(updatedResort))
    }
    var inpantry = false;
        useEffect(()=>{
        const cleanUp = firestore
        .collection('Ingredients')
        .onSnapshot(snapshot=>{
          const items = snapshot.docs
          .map(val=>{
            return {label:val.data().label,...val.data()};
          })
          setIngredients(items)
        })
        return () => cleanUp()
      })
    let location = useLocation();
   


    //location.state.totalNutrients

    var r= location.state.recipe
    
    return(
    <div>
        <Navbar />
        
      <Container>
        <Row>
          <Col>
          <div style = {{height:"100px"}}></div>
          </Col>  
        </Row>
        <Row>
            <Col xs={2}></Col>
          <Col>
          <header className="title">
        <h2 > {r.label}</h2>
        <p >
            Meal Type: 
            {r.mealType.map(v=>{
            return <>{v}</>               
            })
            }
        </p>
        <p >
            Dish: 
            {r.dishType.map(v=>{
            return <>{v}</>               
            })
            }
        </p>
    
        <img className="imgr" src={r.image} style = {{width:"100%",objectFit:"contain",height:"400px",       /* Opera */
  imageRendering:" -webkit-optimize-contrast",/* Webkit (non-standard naming) */
  msInterpolationMode: "nearest-neighbor"}} ></img>
  <div id="card-buttons">
        {isFavorited? (
                    <div onClick={handleFavoritedChange}> 
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="unfavorite-btn"
                            width="20px" height="20px"
                        >
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
                            />
                        </svg>
                    </div>
                    ) : ( 
                    <div onClick={handleFavoritedChange}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="favorite-btn"
                            width="20px" height="20px"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    </div>
                    )}
                    </div>
  <section>tags</section>
  <hr></hr>
  <div style={{width:"50%", margin:"auto"}}>
        {r.dietLabels.map(v=>{
            return (
                <Badge bg="primary">
                    {v}
                </Badge>
            )
        })}
        {r.healthLabels.map(v=>{
            return (
                <Badge bg="warning" text="black">
                    {v}
                </Badge>
            )
        })}
        {r.cautions.map(v=>{
            return (
                <Badge bg="danger" pill text="warning">
                    {v}
                </Badge>
            )
        })}
        </div>
        </header>
          </Col>  
        </Row>
        <hr></hr>
        <Row>
            <Col xs={2}>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
          <div className="sidebar-sticky"></div>
      <Nav.Item>
          <Nav.Link onClick={async ()=>{
          }}>related searches</Nav.Link>
      </Nav.Item>
      <Nav.Item>
            <Nav.Link eventKey="link-1">Dinner</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link eventKey="link-2">Desert</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
      All meals
      </Nav.Link>
      </Nav.Item>
      </Nav>
      
            </Col>
            <Col xs={6}>
            <section class="section-2 ingredients">
        
        
        
        <h2>Ingredients List:</h2>
        <SvgIcon component={EggAltTwoToneIcon}></SvgIcon>
        <ListGroup as="ol" numbered>
        
        {
            r.ingredients.map(i=>{
                ingredients.map(j=>{
                    
                    if(i.food == j.label)
                    inpantry = true;
                })
                if(inpantry){
                    inpantry = false;
                    return(<ListGroup.Item variant="primary">
                        <div className="ms-2 me-auto">
                    <div className="fw-bold">{i.food}</div>
                    <img src={i.image} width="70px"></img>
                  </div> 
                  <Badge bg="primary" pill>
                    you have it
                    </Badge>
                    <OverlayTrigger trigger="click" placement="right" overlay={Pop(i.foodCategory)}>
                        <Button variant="" style={{top:"0",right:"0",position:"absolute"}}><SvgIcon component={LiveHelpIcon}></SvgIcon></Button>
                    </OverlayTrigger>
        </ListGroup.Item>)
                }else{
                   
                    return (
        <ListGroup.Item variant="">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{i.food}</div>
                <img src={i.image} width="70px"></img>
            </div> 
            <Badge bg="danger" pill>
            missing
            </Badge>
            <OverlayTrigger trigger="click" placement="right" overlay={Pop(i.foodCategory)}>
                <Button variant="" style={{top:"0",right:"0",position:"absolute"}}><SvgIcon component={LiveHelpIcon}></SvgIcon></Button>
            </OverlayTrigger>
        </ListGroup.Item>)
                }
            })
        }
        </ListGroup>
       
           </section>
            </Col>
            <Col style={{backgroundColor:"#B0A1BA", color:"white",fontFamily:"blinker", backgroundBlendMode: "overlay",height:"fit-content"}}>
            <aside class="sidebar">
            <div>

                <hr></hr>
                <span>
               <h2>PREP TIME</h2>
               <SvgIcon component={AccessAlarmIcon}></SvgIcon>
               {r.totalTime==0?<>less than a min</>:<>{r.totalTime} mins </> } 
                </span>
          
            </div>
            <div>
                 
               <span>COOK TIME <br></br>
               {r.totalTime==0?<>less than a min</>:<>{r.totalTime} mins </> } 
               </span>
               
            <hr></hr>
            </div>
            <div>
               <span>
                <SvgIcon component={GridViewIcon}></SvgIcon>
                   Number of servings: {r.yield}
               
               </span>
               <hr></hr>
            </div>

           </aside>
            </Col>
        </Row>
        <hr></hr>
        <Row>
        <Col xs={2} >
        
        </Col>
        <Col xs={6}  class="p-3 mb-2 bg-warning text-dark" style={{backgroundColor:"#ABC8C7"}}>
        <section>
        <ol className="section1">
        <h2>Instructions</h2>
        <SvgIcon component={AssignmentTwoToneIcon}></SvgIcon>
        {
            r.ingredients.map((i,p)=>{
                
            if(p!=0)
            return(
                <div>
                <li>{
                i.text
                }</li>
                
                </div>
            )})
        }
        </ol>
        </section>
        
        </Col>
        <Col className="p-4 mb-1 bg-warning text-dark" style={{fontFamily:"Blinker"}}>
        <div >
        <h2>Nutrional facts:</h2>
        <hr></hr>
        <ul>
        <li>
        <h3>Calories:</h3>
        
        </li>
        <li>
        {Math.ceil(r.calories)/r.yield}
        </li>
        <li>
        <h3>carbs: </h3>

        {Math.ceil(r.totalNutrients.CHOCDF.quantity)/r.yield + r.totalNutrients.CHOCDF.unit}
        </li>
        <li>
        <h3>protein: </h3>
        {Math.ceil(r.totalNutrients.PROCNT.quantity)/r.yield + r.totalNutrients.PROCNT.unit}
        </li>
        <li>
        <h3>sugar: </h3>
        {Math.ceil(r.totalNutrients.SUGAR.quantity)/r.yield + r.totalNutrients.SUGAR.unit}
        </li>
        <li>
        <h3>fat:</h3>
        {Math.ceil(r.totalNutrients.FAT.quantity)/r.yield + r.totalNutrients.FAT.unit}
        </li>
        </ul>
        </div>
        
            </Col>
        </Row>
        
        <Divider />
        </Container>
        <Footer />
        </div>
    )
}
export default RecipePage;