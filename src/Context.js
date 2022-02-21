import React from 'react'
import {useNavigate} from 'react-router-dom'


const Context = React.createContext()

function ContextProvider({children}) {
    const navigate = useNavigate()

    const [resevered, setReserve] = React.useState(false)
    const [theme, setTheme] = React.useState(true)
    const [modal, setModal] = React.useState(false)
    const [input, setInput] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        checkIn: "",
        checkOut: "",
        dateOfDeath: "",
        lastWishes: "",
    })

    function changeTheme() {
        setTheme(prevTheme => !prevTheme)
    }

    function openModal(e) {
        e.stopPropagation()
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }

    function submitForm() {
        setReserve(true)
        navigate('/booking')
        console.log('submitted')
        setModal(false)

    }

    function handleChange(event) {
        console.log(event)
        const {name, value} = event.target
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    React.useEffect(() => {
        console.log('rendered')
    }, [modal])

    return (
        <Context.Provider value={{
            modal,
            input,
            resevered,
            theme,
            openModal,
            closeModal,
            handleChange,
            submitForm,
            changeTheme,
        }}>
            {children}
        </Context.Provider>

    )
}

export {ContextProvider, Context}