import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import logo from '../images/KylePowellLogo.svg';
import menuIcon from '../images/menu.png';
import '../css/header.css';

import { navLinks } from '../utility/NavLinks';
import $ from "jquery";

function Header() {
    const [isDark, setIsDark] = useState(false);
    const nav = useNavigate();

    function menuClick() {
        let h = $("#mobileNav").css("height");

        if (h === "0px") {
            $("#mobileNav").css("height", "200px");
        } else {
            $("#mobileNav").css("height", "0px");
        }
    }

    function linkClick(link) {
        nav(`${link}`);
        menuClick();
    }

    const mobileNav = <div className="mobileNav" id="mobileNav">
        {navLinks && navLinks.map((l, i) => {
            return (<div className="mobileNavLink" onClick={linkClick.bind(this, l.link)} key={i}>
                <p className="linkText">{l.name}</p>
            </div>);
        })}
    </div>

    return (<div className='container-fluid'>
        {mobileNav}
        <div className='row'>
            <div className='col-lg-12 headerContainer'>
                <div><img src={logo} /></div>
                <div className="modeButton" >
                    {/* {isDark && <ion-icon name="moon-outline" />}
                    {isDark === false && <ion-icon name="moon" />} */}
                </div>
                <div onClick={menuClick}>
                    <img src={menuIcon} className="mobileNavButton" alt="Menu" />
                </div>
            </div>
        </div>
        <Outlet />
    </div>)
}

export default Header;