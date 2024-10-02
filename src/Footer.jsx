import React from 'react'
import { Button } from 'react-bootstrap'
import './Footer.css'
 

const Footer = () => {
  return (
    <div className="custom-footer">
      <div className="row align-items-center">
        {/* Column for Unisex Store */}
        <div className="col-lg-4 text-center">
          <h5 className="store-heading">Unisex Store</h5>
          
          <ul className="store-list">
            <li>Jackets</li>
            <li>Pants</li>
            <li>Accessories</li>
            <li>Shirts</li>
            <li>T-Shirts</li>
          </ul>
        </div>
        
        {/* Column for Branding Info */}
        <div className="col-lg-4 text-center">
          <h1 className="brand-title">Heyireeh.Dumps</h1>
          <br /><br />
          <p className="brand-text">The content of this site is copyright-protected and is the property of Heyireeh.dumps</p>
        </div>

        {/* Column for Sign-Up Info */}
        <div className="col-lg-4 text-center">
          <h6 className="sign-up-text">Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</h6>
          <Button variant="outline-dark" className="mt-3">Show More</Button>
        </div>
      </div>
    </div>
  )
}

export default Footer