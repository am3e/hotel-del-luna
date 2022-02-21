import React from 'react'
import {Context} from '../Context'

export default function Toggler() {
    const {theme, changeTheme} = React.useContext(Context)

    const ghost = <img className="ghost" alt="logo" src="./ghost-line.png"/>
    const human = <img className="human" alt="logo" src="./user-fill.png"/>


    return (

        <label className="switch">
            <input 
                type="checkbox" 
                className="ghostToggle"
                checked={theme}
                onChange={({target}) => changeTheme(target.checked)}
                aria-label="Ghost toggle mode" />
            <span className="slider round">{ theme ? human : '' }{ theme ? '' : ghost }</span>
        </label>
    )


}
