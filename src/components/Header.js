import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import logo from '../images/KylePowellLogo.svg';
import '../css/header.css';

function Header() {
    const [isDark, setIsDark] = useState(false);

    return (<div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12 headerContainer'>
                <div><img src={logo} /></div>
                <div className="modeButton" >
                    {isDark && <ion-icon name="moon-outline" />}
                    {isDark === false && <ion-icon name="moon" />}
                </div>
            </div>
        </div>
        <Outlet />
    </div>)
}

export default Header;