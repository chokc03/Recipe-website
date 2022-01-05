import React, {useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import Menu from './Menu';
import '../../styles/Nav.css'

function Navbar({categories}) {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState('');
    const handleMenu=()=>{
        setMenu(value=>!value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearch('');
    }
    const onChange=(e)=>{
        setSearch(e.target.value);
    }
    return (
        <nav>
            <div className="menu">
                <div onClick={handleMenu} className="menuBtn">
                    <div className={menu?"burger open":"burger"}></div>
                </div>
                <div className={menu?" categories menu-on":" categories menu-off"}>
                    <Menu categories={categories}/>
                </div>
            </div>
            <div className="logo">
                {/* Add router Navlink = Home */}
                <h3>Freshy Recipe</h3>
            </div>
            <div className="searchbar">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    placeholder="Search any food"
                    value={search}
                    onChange={onChange}/>
                    <button><BsSearch/></button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
