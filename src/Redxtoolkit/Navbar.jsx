import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartcount = useSelector((state) => state.CartReducer.cartvalues.length)
  const totalprice = useSelector((state) => state.CartReducer.totalprice)
  return (
    <div>
      <nav className='navbar navbar-dark bg-black'>
        <div className="d-inline p-2 navbar-nav mx-auto">
            <span className='btn btn-primary'>Cart Items: {cartcount}</span> &nbsp;
            <span className='btn btn-primary'> Total Price: {totalprice}</span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
