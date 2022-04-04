import React from 'react'
import '../../App.css';
import {Context} from '../../Context'

import roomData from '../data/roomData'

export default function Room() {
    const roomArray = roomData.data.room
    const [roomsInfo, setRoomsInfo] = React.useState(roomArray)
    const [rooms, setRooms] = React.useState()
    const {checkBookedRoom, bookedRoom, reserveBookedRoom, removeBookedRoom,addIcon, removeIcon, nights, confirmBooking, modal, openModal} = React.useContext(Context)     
    
    const continueIcon = <img className="continue" alt="arrow" src="./arrow-right-circle-fill.png"/>
    

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
        let booking = bookedRoom.find(booked => booked === key)
        console.log('bookedroom', booking)
        !booking ? reserveBookedRoom(key) : removeBookedRoom(key)
    }

    function getRooms() {
        let roomElements = roomsInfo.map(room => {
            let booking = bookedRoom.find(booked => booked === room.id)
            return (
                <div key={room.id} id={room.id} className="room">
                    <h4 className="room-name">{room.name}</h4>
                    <button className="info-btn" onClick={() => {handleClick(room.id)}}>{!room.displayDescription ? 'See' : 'Hide'} Details</button>
                    <h5 className="room-price">{room.price.toLocaleString("ko-KR", {style: "currency", currency: "KRW"})}</h5>
                    <p className={room.displayDescription ? 'show-room-info' : 'hide-room-info'}>{room.roomDescription}</p>
                    <div className="room-btn-selectors">
                        <button aria-label="deselect room" className="select-room" onClick={() => {selectRoom(room.id)}}>{booking === room.id ? removeIcon : addIcon}</button>
                        {(booking === room.id && checkBookedRoom > 0 && nights) ? <button className="continue-on-button" onClick={confirmBooking}>{continueIcon}</button> : ''}
                        {booking === room.id && checkBookedRoom > 0 && !nights &&
                        <button 
                            className="continue-on-button" 
                            onClick={openModal}
                            id={modal ? "open-modal" : "open-modal"}>
                            {continueIcon}
                        </button>
                        }
                    </div>
                </div>
            )
        })
        setRooms(roomElements)
    }

    React.useEffect(getRooms, [bookedRoom, roomsInfo])

    return (
        <section className="room-display">
            {rooms}
        </section>
    )
}