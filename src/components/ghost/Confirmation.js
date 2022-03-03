//location
//thank you page
import React from 'react'
import {Context} from '../../Context'

export default function Confirmation() {    
    const {input} = React.useContext(Context)        

    return (
        <section className="confirmation wrapper">
            <h1>Welcome {input.firstName} to Hotel Del Luna!</h1>
        </section>

    )

}