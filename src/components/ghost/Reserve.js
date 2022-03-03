import React from 'react'
import '../../App.css';
import {Context} from '../../Context'


function Reserve() {
    const {input, handleChange, closeModal, submitForm} = React.useContext(Context)        

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
                    placeholder="Your Name"
                    className="firstName"
                    value={input.firstName}
                    onChange={handleChange}
                />
            </section>
            <section className="form">
                <label
                    htmlFor="dateOfDeath"
                >Date of Death</label>
                <input 
                    id="dateOfDeath"
                    type="date"
                    name="dateOfDeath"
                    placeholder="Approximate date of death"
                    className="dateOfDeath"
                    value={input.dateOfDeath}
                    onChange={handleChange}
                />
            </section>
            <section className="form">
                <label
                    htmlFor="lastWishes"
                >Last Wishes</label>
                <textarea 
                    id="lastWishes"
                    name="lastWishes"
                    placeholder="Before I crossover, I would like to..."
                    className="lastWishes"
                    value={input.lastWishes}
                    onChange={handleChange}
                />
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

export default Reserve

