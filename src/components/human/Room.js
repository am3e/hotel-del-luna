import React from 'react'
import '../../App.css';
import {Context} from '../../Context'

import roomData from '../roomData'


export default function Room() {
    const roomArray = roomData.data.room
    const [roomsInfo, setRoomsInfo] = React.useState(roomArray)
    const [rooms, setRooms] = React.useState()
    const {bookedRoom, reserveBookedRoom, confirmBooking, inDate, outDate} = React.useContext(Context)        


    function handleClick(key) {
        const updatedRoomInfo = roomsInfo.map(room => {
            if (room.id === key) {
                return {
                    ...room, 
                    displayDescription: !room.displayDescription
                }    
            } else {
                return room
            }
        })
        setRoomsInfo(updatedRoomInfo)

    }

    function selectRoom(key) {
        const findRoom = roomsInfo.filter(room => room.id === key)
        console.log(findRoom[0].price)
        reserveBookedRoom(key)
    }

    function getRooms() {
        let roomElements = roomsInfo.map(room => {
            let booking = bookedRoom.find(booked => booked === room.id)
            return (
                <div key={room.id} id={room.id} className="room">
                    <h3 className="room-name">{room.name}</h3>
                    <button className="info-btn" onClick={() => {handleClick(room.id)}}>{!room.displayDescription ? 'Hide' : 'See'} Details</button>
                    <h4 className="room-price">{room.price.toLocaleString("ko-KR", {style: "currency", currency: "KRW"})}</h4>
                    <p className={room.displayDescription ? 'show-room-info' : 'hide-room-info'}>{room.roomDescription}</p>
                    <button className="select-room" onClick={() => {selectRoom(room.id)}}>{booking === room.id ? 'x' : '+'}</button>
                </div>
            )
        })
        setRooms(roomElements)
    }

    React.useEffect(getRooms, [bookedRoom, roomsInfo])

    return (
        <>
            {rooms}
            {bookedRoom.length > 0 && inDate && outDate && <button onClick={confirmBooking}>Continue</button>}

        </>
    )
}