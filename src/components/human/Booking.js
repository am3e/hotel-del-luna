//check availablity
//select a room
//sort by recommended, price, rate type, room type

//complete details
//confirm email send out?

import React from 'react'
import {Context} from '../../Context'


export default function Booking() {    
    const {input} = React.useContext(Context)        

    return (
        <h1>{input.firstName}</h1>

    )

}