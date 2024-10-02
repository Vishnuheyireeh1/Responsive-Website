import React from 'react'
import img1 from './assets/heyireeh1.gif'
import baggy from './assets/baggy.jfif'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Home = () => {
    
  return (
        <div style={{paddingTop:'50px'}}>
            <Navbar className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand >
          <i class="fa-solid fa-cart-shopping"></i>
          Collect Your Thrifts
          </Navbar.Brand>
        </Container>
      </Navbar>
                <div className='home.container row align-items-center'>
                   <div className="col-lg-6">
                    <h4 className='text-dark ms-2'>What Is Thrift?</h4>
                    <p className='text-dark ms-2'>Thrifting is the act of shopping at thrift stores, garage sales, or flea markets to buy gently used items at a discount. Thrifting can be a great way to find high-end clothing, shoes, accessories, and more at a lower price than retail. It can also help the environment by reducing the amount of trash produced and the natural resources used to make new goods. </p>
                    <img className='w-100 ms-6' src={img1} alt="" />
                   </div>
                   <div className="col-lg-6">
                    <img className='w-100 me-6' src={baggy} alt="" />   
                   </div>
                   </div>
                <br />
           </div>
    
  )
}

export default Home