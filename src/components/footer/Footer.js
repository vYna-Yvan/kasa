import React from 'react'
import './style.css'
import logo from '../footer/logo/.LOGO.png'

const Footer = () => {
    return (
        <footer>
            <div className='footer_box'><img alt='kasa' src={logo} ></img>
                <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
            </div>


        </footer>
    )
}

export default Footer