import "./footer.css"
import foot from "./footer.png"
const Footer = () =>{
    return (
        <footer>
            <img src={foot} />
            <div id="line"></div>
            <h3>© Your Copyright 2023</h3>
            <h3 id="links"><a href="#">Imprint</a><span><a href="#">Privacy</a></span></h3>
        </footer>
    )
}
export default Footer; 