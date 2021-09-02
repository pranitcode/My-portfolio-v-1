import React,{useState} from 'react';
import "./Header.css";
import Mobile from './mobile/mobile';
import Web from './web/web';
import {Link} from"react-router-dom"




const Header = () => {

const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="header">

          <div className="logo"><Link style={{textDecoration:"none",color:"#0fccce"}} to="/">pranit</Link></div>

            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                         <i className="fas fa-bars menu-icon"></i>
                    </div>
                     
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}

                </div>
            </div>
        </div>
    )
}

export default Header;


