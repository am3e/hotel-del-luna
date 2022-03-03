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
            {!theme && <li><Link to="./support">Support</Link></li>}
            {!theme && <li><Link to="./terms">Terms</Link></li>}
            <li><Link to="./about">About</Link></li>
            {theme && <li><Link to="./careers">Careers</Link></li>}
          </ul>
        <p className="footer">2022 Amalia Reodica</p>
      </footer>
    )
}