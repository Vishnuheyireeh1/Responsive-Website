import React from 'react'
import { Card,Button } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baggy1 from './assets/baggy1.jfif'
import baggy2 from './assets/baggy2.jfif'
import baggy3 from './assets/baggy3.jfif'
import './Home3.css'

const Home3 = () => {
  return (
    <div>
         <div className='my-5'>
    <h1 className='text-center text-dark align-items-center'>Pants</h1>
    <br /><br />
    <div className='row ms-5 align-items-center'>
    <div className='col-lg-4'>
         <Card style={{ width: '18rem',height :'450px'}}>
           <Card.Img style={{height:'450px'}} variant="top" src={baggy1} />
           <Card.Body class='cardBody'>
               <Card.Title className='text-dark text-center'>T LABEL ROMANTIC</Card.Title>
           </Card.Body>
       </Card>
    </div>
     <div className='col-lg-4'>
       <Card style={{ width: '18rem',height :'450px' }}>
           <Card.Img style={{height:'450px'}} variant="top" src={baggy2} />
           <Card.Body class='cardBody'>
               <Card.Title className='text-dark text-center'>FLYERRER MULTI-POCKET</Card.Title>
           </Card.Body>
       </Card>
     </div>
   <div className='col-lg-4'>
       <Card style={{ width: '18rem',height :'450px' }}>
           <Card.Img style={{height:'450px'}} variant="top" src={baggy3} />
           <Card.Body class='cardBody'>
               <Card.Title className='text-center text-dark'>ZARA BAGGY</Card.Title>
           </Card.Body>
       </Card>
   </div>
    </div>
    <br /><br />
    <div className='d-flex justify-content-center align-items-center'>
        <Button variant="outline-dark">Show More</Button>
        </div>
</div>
    </div>
  )
}

export default Home3