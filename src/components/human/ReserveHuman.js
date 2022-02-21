import React from 'react'
import '../../App.css';
import {Context} from '../../Context'
import {useNavigate} from 'react-router-dom'

function ReserveHuman() {
    const {input, handleChange, closeModal, submitForm} = React.useContext(Context)        
    const navigate = useNavigate()

    return (

        <div className="modal" onClick={e => e.stopPropagation()}>
            
            <h1>Reservation Details</h1>

            <section className="form">
                <label>First Name
                <input 
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Hong"
                    className="firstName"
                    value={input.firstName}
                    onChange={handleChange}
                /></label>
                <label>Last Name
                <input 
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Gildong"
                    className="lastName"
                    value={input.lastName}
                    onChange={handleChange}
                /></label>
                <label>Email Address
                <input 
                    id="email"
                    type="email"
                    name="email"
                    placeholder="hong.gildong@email.com"
                    className="email"
                    value={input.email}
                    onChange={handleChange}
                /></label>
            </section>

            <section className="form">
                <label>Check In
                <input 
                    id="checkIn"
                    type="date"
                    name="checkIn"
                    className="checkIn"
                    value={input.checkIn}
                    onChange={handleChange}
                /></label>
                <label>Check Out
                <input 
                    id="checkOut"
                    type="date"
                    name="checkOut"
                    className="checkOut"
                    value={input.checkOut}
                    onChange={handleChange}
                /></label>
            </section>
            
            <div>
                <button 
                    aria-label="cancel reseveration"
                    className="cancel-res-btn"
                    onClick={closeModal}>Cancel</button>
                <button 
                    aria-label="submit reseveration"
                    className="submit-res-btn"
                    onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}

export default ReserveHuman

