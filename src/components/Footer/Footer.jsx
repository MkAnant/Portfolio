import React from 'react'
import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
        <small className='cursive-font'>&copy; Copyright {year} Mangalampalli Anant</small>
    </footer>
  )
}

export default Footer