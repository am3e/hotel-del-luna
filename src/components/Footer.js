import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
import {Context} from '../Context'

export default function Footer() {
    const {theme} = React.useContext(Context)
    
    return (
      <footer>
          <ul className={`link-list`}>
            {theme && <li><Link to="/pricing">Pricing</Link></li>}
            {!theme && <li><Link to="./terms">Terms of Service</Link></li>}
            {!theme && <li><Link to="./about">About</Link></li>}
            {theme && <li><Link to="./careers">Careers</Link></li>}
          </ul>
        <p className="footer">2022 created by Amalia Reodica, based on <a href="https://en.wikipedia.org/wiki/Hotel_del_Luna">Hotel Del Luna</a> <i>2019 Korean TV Drama</i></p>
      </footer>
    )
}