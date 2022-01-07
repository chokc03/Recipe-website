import React, {useState} from 'react';
import Menu from './Menu';
import '../../styles/Nav.css'

function Navbar() {
    const [menu, setMenu] = useState(false);

    const handleMenu=()=>{
        setMenu(value=>!value);
    }

    return (
        <nav>
            <div className="logo">
                {/* Add router Navlink = Home */}
                <h3>Freshy Recipe</h3>
            </div>
            <div className="menu">
                <div onClick={handleMenu} className="menuBtn">
                    <div className={menu?"burger open":"burger"}></div>
                </div>
                <div className={menu?" categories menu-on":" categories menu-off"}>
                    <Menu/>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
