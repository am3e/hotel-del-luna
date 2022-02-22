import React from 'react'
import '../../App.css';
import {Context} from '../../Context'

function ReserveHuman() {
    const {input, handleChange, closeModal, submitForm, required, checkToday} = React.useContext(Context)
     

    return (

        <div className="modal" onClick={e => e.stopPropagation()}>
            
            <h1>Reservation Details</h1>
            <form>

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
                        min={checkToday}
                        required
                    /></label>
                    <label>Check Out
                    <input 
                        id="checkOut"
                        type="date"
                        name="checkOut"
                        className="checkOut"
                        value={input.checkOut}
                        onChange={handleChange}
                        min={input.checkIn}
                        required
                    /></label>
                </section>
                <p className="alert">{required}</p>
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
            </form>
        </div>
    )
}

export default ReserveHuman

