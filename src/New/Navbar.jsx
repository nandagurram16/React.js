import React from 'react'
import { Link } from 'react-router-dom'

const styling ={
    listStyleType: 'none',
      backgroundColor: 'blue',
      padding: '10px',
      margin: 0,
      display: 'flex',
      gap: '20px',
      color: 'black68',
          
}

const Navbar = () => {
  return (
    <div>
      <ul style={styling}>
      <Link to='/'><li>Home</li></Link>
      <Link to='/dashboard'><li>Dashboard</li></Link>
      <Link to='/about'><li>About</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
