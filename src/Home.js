import React from 'react';
import { Avatar, Button } from '@nextui-org/react';
import './Css/Home.css';
import Header from './Header';
import CarouselComp from './Carousel';

function Home() {

  return (
    <div className="home-container">

      <header className="header">
        <Header/>
      </header>


      <section className="hero">
        <h1>Welcome to Embed UR</h1>
        <p>Technology Licensing and Embedded Systems Engineering</p>
        <Button style={{border:'1px solid'}} color='error' className="hero-btn">Learn More</Button>
      </section>


      <section className="carousel" style={{width:'1300px'}}>
      <div style={{justifyContent:'center',paddingLeft:'300px'}}><CarouselComp/></div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container" style={{display:'flex'}}>
          <div className="testimonial">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis nec nisi tristique scelerisque."</p>
            <div className="testimonial-info">
              <h3>John Doe</h3>
              <p>CEO, XYZ Company</p>
            </div>
          </div>
          <div className="testimonial">
            <p>"Nulla facilisi. Suspendisse ac augue feugiat, consequat eros vitae, tincidunt nunc."</p>
            <div className="testimonial-info">
              <h3>Jane Smith</h3>
              <p>CTO, ABC Corporation</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} eMBED ur Systems. All rights reserved.</p>
          <p>Address: 1234 Street, City, Country</p>
          <p>Email: info@embedur.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
