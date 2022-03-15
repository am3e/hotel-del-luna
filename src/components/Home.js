import React from 'react'
import {Context} from '../Context'


export default function Home() {
    const {theme} = React.useContext(Context)

    const url = theme ? './images/regular.png' : './images/hotel-sign.png'
    const mainImage = <img src={url} alt="Hotel Del Luna" />
    return (
        <>
            {mainImage}
        </>

    )
}