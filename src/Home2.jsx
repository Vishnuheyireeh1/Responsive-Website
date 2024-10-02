import React from 'react'
import { Card,Button } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jacket1 from "./assets/jacket1.jfif"
import jacket2 from "./assets/jacket2.jfif"
import jacket4 from "./assets/jacket4.jfif"
import './Home3.css'

const Home2 = () => {
  return (
   
        <div className='my-5'>
    <h1 className='text-center text-dark'>Jackets</h1>
    <br /><br />
    <div className='row ms-5 align-items-center'>
    <div className='col-lg-4'>
         <Card style={{ width: '18rem',height :'450px'}}>
           <Card.Img style={{height:'450px'}} variant="top" src={jacket1} />
           <Card.Body class='cardBody'>
               <Card.Title className='text-dark text-center'>AUTUMNWIND JACKETS</Card.Title>
           </Card.Body>
       </Card>
    </div>
     <div className='col-lg-4'>
       <Card style={{ width: '18rem',height :'450px' }}>
           <Card.Img style={{height:'450px'}} variant="top" src={jacket2} />
           <Card.Body class='cardBody'>
               <Card.Title className='text-dark text-center'>AUTUMNWIND JACKETS</Card.Title>
           </Card.Body>
       </Card>
     </div>
   <div className='col-lg-4'>
       <Card style={{ width: '18rem',height :'450px' }}>
           <Card.Img style={{height:'450px'}} variant="top" src={jacket4} />
           <Card.Body class='cardBody'>
               <Card.Title className='text-center text-dark'>OPIUM JACKETS</Card.Title>
           </Card.Body>
       </Card>
   </div>
    </div>
    <br /><br />
    <div className='d-flex justify-content-center align-items-center'>
        <Button variant="outline-dark">Show More</Button>
        </div>
</div>
    
  )
}

export default Home2