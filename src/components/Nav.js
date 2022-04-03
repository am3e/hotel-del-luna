import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
import Reserve from './ghost/Reserve';
import ReserveHuman from './human/ReserveHuman';

import Toggler from './Toggler';
import {Context} from '../Context'


export default function Nav() {
    const {modal, openModal, theme, reserved} = React.useContext(Context)

    return (
        <>
            <nav className={`${reserved ? 'nav-update' : ''}`}>
                <div className="theme-section">
                    
                    <Link to="/home" className="logo" ><img className="full-moon" alt="logo" src="./hotel-logo.png" /><span className="hotel-title">Hotel Del Luna</span></Link>
                    <Toggler />
                </div>
                
                <div className="nav-section">
                    <ul className="link-list">
                    {!theme && <li><Link to="/location">Location</Link></li>}
                    {!theme && <li><Link to="/amenities">Amenities</Link></li>}
                    </ul>
                    {!reserved && <button 
                        className="reserve-button" 
                        onClick={openModal}
                        id={"open-modal"}>
                        Reserve
                    </button>}
                </div>
                        
                {!theme && <div class="scanlines"></div>}
            </nav>
                                

            <div className={modal ? "overlay open" : "overlay"}>
                    {theme ? <ReserveHuman /> : <Reserve /> }
            </div>

        </>
    )
}