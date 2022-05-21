/*
  Writer : Kyungchan Cho
  This file makes the navbar
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.05.21
*/

import React, {useState} from 'react';
import Menu from './Menu';
import '../../styles/Nav.scss'

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuBar=()=>{
        setOpenMenu(value=>!value);
    }

    return (
        <nav>
            <div className="logo">
                <h3>Freshy Recipe</h3>
            </div>
            <div className="menu">
                <div onClick={handleMenuBar} className="menuBtn">
                    <div className={openMenu?"burger open":"burger"}></div>
                </div>
                <div className={openMenu?" categories menu-on":" categories menu-off"}>
                    <Menu handleMenuBar={handleMenuBar}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
