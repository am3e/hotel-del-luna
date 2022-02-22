import React from 'react'
import {useNavigate} from 'react-router-dom'


const Context = React.createContext()

function ContextProvider({children}) {
    const [resevered, setReserve] = React.useState(false)
    const [theme, setTheme] = React.useState(true)
    const [modal, setModal] = React.useState(false)
    const [required, setRequired] = React.useState('')
    const [bookedRoom, setBookedRoom] = React.useState([])
    const [input, setInput] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        checkIn: "",
        checkOut: "",
        dateOfDeath: "",
        lastWishes: "",
    })
    const navigate = useNavigate()
    const todayFull = new Date()
    const today = todayFull.toLocaleDateString()
    const thisDay = today.split('/')
    console.log(thisDay)
    const checkToday = `${thisDay[2]}-${thisDay[0].length === 1 ? '0' + thisDay[0] : thisDay[0]}-${thisDay[1].length === 1 ? '0' + thisDay[1] : thisDay[1]}`
    const inputCheckIn = input.checkIn.split("-")
    let dayIn = inputCheckIn[2]
    let monthIn = inputCheckIn[1]
    let yearIn = inputCheckIn[0]
    const inputCheckOut = input.checkOut.split("-")
    let dayOut = inputCheckOut[2]
    let monthOut = inputCheckOut[1]
    let yearOut = inputCheckOut[0]

    let inDate = new Date (`${monthIn}/${dayIn}/${yearIn}`)
    let outDate = new Date (`${monthOut}/${dayOut}/${yearOut}`)


    function numberOfNights() {

        let diffInTime = outDate.getTime() - inDate.getTime()
        let diffInDays = diffInTime / (1000 * 3600 * 24)
        return diffInDays

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
    }

    function closeModal() {
        setModal(false)
    }

    function submitForm(e) {
        e.preventDefault()
        if (theme && input.checkIn && input.checkOut) {
            console.log(input.checkIn, input.checkOut)
            if (inDate < todayFull) {
                setRequired('Please select dates for the future')
                setInput(prevInput => ({
                    ...prevInput,
                    checkIn: '',
                    checkOut: ''
                }))
            }
            if (input.checkIn === input.checkOut) {
                setRequired('Minimum one night booking required')
                setInput(prevInput => ({
                    ...prevInput,
                    checkOut: ''
                }))
            }
            if (outDate < inDate) {
                setRequired('Please select dates where check in is before check out')
                setInput(prevInput => ({
                    ...prevInput,
                    checkIn: '',
                    checkOut: ''
                }))
            }
            if (inDate >= todayFull && input.checkIn !== input.checkOut && outDate > inDate) {
                setRequired('')
                setReserve(true)
                navigate('/room')
                console.log('submitted')
                setModal(false)
            }
        } else if (theme) {
            if (!input.checkIn && !input.checkout) {
                setRequired('Please select dates to check availability')
            }
        } else if (!theme) {
            navigate('/confirmation')
            setModal(false)
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
    }, [modal])

    console.log('hssdcknj',checkToday, today, input.checkIn)

    return (
        <Context.Provider value={{
            modal,
            input,
            resevered,
            theme,
            required,
            bookedRoom,
            today,
            checkToday,
            inDate,
            outDate,
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