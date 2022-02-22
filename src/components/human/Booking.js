
import React from 'react'
import {Context} from '../../Context'
import Room from './Room'

export default function Booking() {    
    const {input, bookedRoom, confirmBooking} = React.useContext(Context)  
    

    return (
        <div>
            {
            input.checkIn && input.checkOut && <h1>Availablity for {input.checkIn} to {input.checkOut}</h1>
            }
            <Room />
            {bookedRoom.length > 0 && <button onClick={confirmBooking}>Continue</button>}
        </div>

    )

}