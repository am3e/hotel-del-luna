
import React from 'react'
import {Context} from '../../Context'
import Room from './Room'

export default function Booking() {    
    const {input, bookedRoom, nights, confirmBooking} = React.useContext(Context)  
    

    return (
        <section className="booking wrapper">
            {
                nights && <h1>Availablity for {input.checkIn} to {input.checkOut}</h1>
            }
            <Room />
            {bookedRoom.length > 0 && nights && <button className="continue-on-button" onClick={confirmBooking}>Continue</button>}
        </section>

    )

}