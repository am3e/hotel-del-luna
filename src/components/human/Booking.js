
import React from 'react'
import {Context} from '../../Context'
import Room from './Room'

export default function Booking() {    
    const {checkInDate, checkOutDate, nights} = React.useContext(Context)  
    

    return (
        <section className="booking">

            {
                nights > 0 && 
                    <h2>Availablity for {checkInDate} to {checkOutDate}</h2>
                    
            }
            <Room />
            <p className="alert">Free Cancellation 24 hours before Check In, after that Cancellation Fee may apply</p>
        </section>

    )

}