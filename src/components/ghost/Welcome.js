//location
//thank you page
import React from 'react'
import {Context} from '../../Context'

export default function Welcome() {    
    const {input} = React.useContext(Context) 
    
    const name = input.firstName ? input.firstName[0].toUpperCase() + input.firstName.substring(1).toLowerCase() + ' ' : '';


    return (
        <section className="welcome wrapper">
            <div class="container">
                <div class="glitch" data-text={`Welcome 
                ${name}to Hotel Del Luna!`}>Welcome {name}to Hotel Del Luna!</div>
                <div class="glow">Welcome {name}to Hotel Del Luna!</div>

            </div>
            <div class="scanlines"></div>
        </section>

    )

}