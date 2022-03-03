import React from 'react'
import {Context} from '../../Context'
import '../../App.css';

import Room from './Room'


export default function Pricing() {
    const {bookedRoom, modal, openModal, nights} = React.useContext(Context)  

    return (
        <section className="pricing">
            <h1>Pricing</h1>
            <Room />
            {bookedRoom.length > 0 && !nights &&
            <button 
                        className="reserve-button" 
                        onClick={openModal}
                        id={modal ? "open-modal" : "open-modal"}>
                        Check Availablity
                    </button>
            }

        </section>
    )

}


