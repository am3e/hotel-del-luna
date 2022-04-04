import React from 'react'
import '../../App.css';
import {Context} from '../../Context'

function ReserveHuman() {
    const {input, handleChange, closeModal, submitForm, required, checkToday} = React.useContext(Context)
     
    console.log(checkToday, input)
    return (

        <div className="modal" onClick={e => e.stopPropagation()}>
            
            <h1>Reservation Details</h1>
                <section className="form">
                    <label
                        htmlFor="firstName"
                    >First Name</label>
                    <input 
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Hong"
                        className="firstName"
                        value={input.firstName}
                        onChange={handleChange}
                    />
                </section>
                <section className="form">
                    <label
                        htmlFor="lastName"
                    >Last Name</label>
                    <input 
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Gildong"
                        className="lastName"
                        value={input.lastName}
                        onChange={handleChange}
                    />
                </section>
                <section className="form">
                    <label
                        htmlFor="email"
                    >Email Address</label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        placeholder="hong.gildong@email.com"
                        className="email"
                        value={input.email}
                        onChange={handleChange}
                    />
                </section>
                <section className="form">
                    <label
                        htmlFor="checkIn"
                    >Check In</label>
                    <input 
                        id="checkIn"
                        type="date"
                        name="checkIn"
                        className="checkIn"
                        value={input.checkIn}
                        onChange={handleChange}
                        min={checkToday}
                        required
                    />
                </section>
                <section className="form">
                    <label
                        htmlFor="checkOut"
                    >Check Out</label>
                    <input 
                        id="checkOut"
                        type="date"
                        name="checkOut"
                        className="checkOut"
                        value={input.checkOut}
                        onChange={handleChange}
                        min={input.checkIn}
                        required
                    />
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
        </div>
    )
}

export default ReserveHuman

