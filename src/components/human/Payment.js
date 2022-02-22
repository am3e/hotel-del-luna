import React from 'react'
import '../../App.css';
import {Context} from '../../Context'
import roomData from '../roomData'


export default function Payment() {
    const roomArray = roomData.data.room
    const [roomsInfo, setRoomsInfo] = React.useState(roomArray)
    const [rooms, setRooms] = React.useState()
    const [totalAmount, setTotalAmount] = React.useState(0)
    const {input, bookedRoom, removeBookedRoom, numberOfNights} = React.useContext(Context)  
    const [buttonText, setButtonText] = React.useState('Confirm Reservation')
    const [disableButton, setDisableButton] = React.useState(false)
    const [bookingComplete, setBookingComplete]  = React.useState(false)   
    function finalize() {
        setButtonText(`Processing payment of ${totalAmount}`)
        if (bookedRoom.length > 0) {setDisableButton(true)}
        setTimeout(() => {
            console.log("!")
            bookedRoom.map(room => removeBookedRoom(room))
            setBookingComplete(true)
        }, 3000)
        if (bookedRoom.length === 0) setDisableButton(false)
    }

    function selectRoom(key) {
        removeBookedRoom(key)
    }

    function confirmBooked() {
        console.log("rendered", totalAmount)
        let total = 0
        let totalNights = numberOfNights()
        const showBookings = bookedRoom.map(id => roomsInfo.map(room => {
            if (room.id === id) {
                total += room.price * totalNights
                return (
                    <div key={room.id} id={room.id} className="room">
                        <h3 className="room-name">{room.name}</h3>
                        <h4 className="room-price">{(room.price.toLocaleString("ko-KR", {style: "currency", currency: "KRW"})) + "/per night"}</h4>
                        <p className="show-room-info">{room.roomDescription}</p>
                        <button className="select-room" onClick={() => {selectRoom(room.id)}}>{id === room.id ? 'x' : '+'}</button>
                    </div>
                )
            }
        } ))
        setRooms(showBookings)
        setTotalAmount(total.toLocaleString("ko-KR", {style: "currency", currency: "KRW"}))
    }

    React.useEffect(confirmBooked, [bookedRoom, totalAmount])

    return (
        <>
            <h1>Payment</h1>
            {rooms}
            {bookedRoom.length > 0 && <h2>Total Amount: {totalAmount}</h2>}
            {bookedRoom.length > 0 && <button disabled={disableButton} onClick={finalize}>{buttonText}</button>}
            {bookingComplete && <h2>Thank you{input.name ? ' ' + input.name : ''}, your booking is confirmed for {input.checkIn} to {input.checkOut}</h2>}
        </>
    )
}
    // <div key={room.id} id={room.id} className="room">
    //     <h3 className="room-name">{room.name}</h3>
    //     <h4 className="room-price">{room.price.toLocaleString("ko-KR", {style: "currency", currency: "KRW"})}</h4>
    //     <p className={room.displayDescription ? 'show-room-info' : 'hide-room-info'}>{room.roomDescription}</p>
    //     <button className="select-room" onClick={() => {removeRoom(room.id)}}>{ roomBooked ? 'selected' : '+'}</button>
    // </div>