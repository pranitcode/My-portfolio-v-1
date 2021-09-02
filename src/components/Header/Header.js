import React,{useState} from 'react';
import "./Header.css";
import Mobile from './mobile/mobile';
import Web from './web/web';




const Header = () => {

const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="header">

          <div className="logo">pranit</div>

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


