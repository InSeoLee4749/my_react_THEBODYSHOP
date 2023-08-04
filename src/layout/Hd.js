import React, {useState, useEffect} from "react";
import hd from "../scss/hd.module.css";
import { Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';



export default function Hd(props) {

    const [scrollPosition, setScrollPosition] = useState(0);
    

    const updateScroll = () => {
        setScrollPosition( window.pageYOffset );      
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
        
        return(
            ()=>{
                window.removeEventListener('scroll', updateScroll)
            }
        )
    }, []);
    // {scrollPosition > 100 && "scrolldown" }
    // scrollPosition < 100 ? "original_header" : "change_header" `${hd.navbar}`
    return (
    <header  className={ scrollPosition > 100 && "scrolldown " } id="hd">
        <div id="ad" className="bg-dark text-white text-center">광고임</div>
    <Navbar className={`${hd.navbar} flex-wrap`}  expand="lg" >
        <Navbar.Brand as="h1" className="col-lg-12 d-flex justify-content-center overflow-hidden "><a href="#top" className="d-block"><img src="./img/svg/The_Body_Shop_logo.svg"></img></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
            <Scrollspy  currentClassName="active">
                {
                props.dbsrc.gnb.map( (v, x) =>{
                    return  <li key={x}><Nav.Link href={"#"+v.href}>{v.title}</Nav.Link></li>
                })  
            
                }
            
            </Scrollspy>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </header>
    );
}
