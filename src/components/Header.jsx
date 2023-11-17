import React from 'react'
import "../styles/Header.scss"

const Header = () => {
  return (
    <>
        <div className='nav-bar'>
            <div className='logo'>
                <h1>Ahmad Raza</h1>
            </div>
            <div className='nav-links'>
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">Projects</a>
            </div>
        </div>
    </>
  )
}

export default Header
