import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
import Reserve from './ghost/Reserve';
import ReserveHuman from './human/ReserveHuman';

import Toggler from './Toggler';
import {Context} from '../Context'


export default function Nav() {
    const {modal, openModal, theme} = React.useContext(Context)

    return (
        <>
            <nav>
                <div className="theme-section">
                    <Link to="/home" className="full-moon" ><img className="full-moon" alt="logo" src="./logo192.png" /></Link>
                    <Toggler />
                </div>
                
                <div className="nav-section">
                    <ul className="link-list">
                    {!theme && <li><Link to="/location">Location</Link></li>}
                    {!theme && <li><Link to="/amenities">Amenities</Link></li>}
                    {theme && <li><Link to="/pricing">Pricing</Link></li>}
                    </ul>
                    <button 
                        className="reserve-button" 
                        onClick={openModal}
                        id={modal ? "open-modal" : "open-modal"}>
                        Reserve
                    </button>
                </div>
                        

            </nav>
                                

            <div className={modal ? "overlay open" : "overlay"}>
                    {theme ? <ReserveHuman /> : <Reserve /> }
            </div>

        </>
    )
}