import React from 'react'
import {useNavigate} from 'react-router-dom'


const Context = React.createContext()

function ContextProvider({children}) {
    const [reserved, setReserve] = React.useState(false)
    const [theme, setTheme] = React.useState(true)
    const [modal, setModal] = React.useState(false)
    const [required, setRequired] = React.useState('')
    const [bookedRoom, setBookedRoom] = React.useState([])
    const [nights, setNights] = React.useState(0)
    const [input, setInput] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        checkIn: "",
        checkOut: "",
        daysSinceDeath: 0,
        lastWishes: "",
    })
    const navigate = useNavigate()
    const todayFull = new Date()
    const today = todayFull.toLocaleDateString()
    const thisDay = today.split('/')
    const checkToday = `${thisDay[2]}-${thisDay[0].length === 1 ? '0' + thisDay[0] : thisDay[0]}-${thisDay[1].length === 1 ? '0' + thisDay[1] : thisDay[1]}`
    const inputCheckIn = input.checkIn.split("-")
    const inputCheckOut = input.checkOut.split("-")
    const [yearIn, monthIn, dayIn] = inputCheckIn
    const [yearOut, monthOut, dayOut] = inputCheckOut

    let inDate = new Date (`${monthIn}/${dayIn}/${yearIn}`)
    let outDate = new Date (`${monthOut}/${dayOut}/${yearOut}`)

    let checkInDate = new Date (`${monthIn}/${dayIn}/${yearIn}`).toLocaleDateString(  'en-us',
        {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }
    )
    let checkOutDate = new Date (`${monthOut}/${dayOut}/${yearOut}`).toLocaleDateString(  'en-us',
        {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }
    )

    const addIcon = <img className="addIcon" alt="logo" src="./add-circle-line.png"/>
    const removeIcon = <img className="removeIcon" alt="logo" src="./close-circle-fill.png"/>

    function numberOfNights() {
        let diffInTime = outDate.getTime() - inDate.getTime()
        let diffInDays = diffInTime / (1000 * 3600 * 24)
        console.log(diffInTime, diffInDays, inDate, outDate)
        setNights(diffInDays)
    }

    function reserveBookedRoom(room) {
        setBookedRoom(prevBooked => [...prevBooked, room])
        console.log('booked', room)
    }

    function removeBookedRoom(room) {
        setBookedRoom(prevBooked => prevBooked.filter(booked => booked !== room))
        console.log('removed', room)

    }

    function changeTheme() {
        setTheme(prevTheme => !prevTheme)
        navigate('/home')
    }

    function openModal(e) {
        e.stopPropagation()
        setModal(true)
        console.log('click')
    }

    function closeModal() {
        setModal(false)
    }

    function submitForm(e) {
        e.preventDefault()
        if (bookedRoom > 0) {
            bookedRoom.map(room => {
                if (room = e) {
                    
                }
            })
        }

        if (theme) {
            console.log(nights)
            if (nights) {
                if (input.checkIn === input.checkOut) {
                    console.log("wow")
                    setRequired('Minimum one night booking required')
                    setInput(prevInput => ({
                        ...prevInput,
                        checkOut: ''
                    }))
                }
                if (nights && bookedRoom.length === 0) {
                    console.log("cho")
                    setRequired('')
                    setReserve(true)
                    navigate('/booking')
                    setModal(false)
                }
                if (nights && bookedRoom.length > 0) {
                    console.log("see")
                    setRequired('')
                    setReserve(true)
                    navigate('/booking')
                    setModal(false)
                }
            } else if (!nights) {
                setRequired('Please select dates to check availability')
            }
        } else if (!theme) {
            navigate('/welcome')
            setModal(false)
            setReserve(true)
        }

    }

    function handleChange(event) {
        console.log(event)

        const {name, value} = event.target
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
        

    }

    function confirmBooking() {
        console.log('clicked continue')
        navigate('/payment')
    }

    React.useEffect(() => {
        console.log('rendered')
        if (input.checkIn && input.checkOut) {
            console.log('done it')
            numberOfNights()
        }
    }, [modal, input])


    return (
        <Context.Provider value={{
            modal,
            input,
            reserved,
            theme,
            required,
            bookedRoom,
            today,
            checkToday,
            inDate,
            outDate,
            nights,
            addIcon,
            removeIcon,
            checkInDate, 
            checkOutDate,
            openModal,
            closeModal,
            handleChange,
            submitForm,
            changeTheme,
            reserveBookedRoom,
            removeBookedRoom,
            numberOfNights,
            confirmBooking,
        }}>
            {children}
        </Context.Provider>

    )
}

export {ContextProvider, Context}