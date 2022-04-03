import React from 'react'

export default function Location() {
    return (
        <section className="about wrapper">
            <h1>Location</h1>
            <h4> Due to the nature of the guests we serve, this location is typically found in the middle of the night under the full moon. Please refer to the Seoul skyline for further directions</h4>
            <img className="location" src="./location-map.png" alt="vague map to show hotel's location" />
            <h3 className="alert">Please refrain from inviting human guests to the hotel, they are not permitted on the premises.</h3>
        </section>
    )
}