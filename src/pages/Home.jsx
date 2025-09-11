import Testimonial from '../testimonial-section'
import OurServices from '../our-services-section'
import WhyUs from '../why-us'
import './home.css' 
import { Link } from 'react-router-dom'
 function Home()
{
    return(
      <>
   <section id="hero">
    <div id='hero-text'>
    <h2>Glow with Confidence</h2>
    <p>Professional beauty services for every occasion</p>
    <button id='booking-btn'>Book Appointment Now</button>
    </div>
    <div id="hero-overlay"></div>
  </section>
  <section id="about">
    <img src="src\assets\parlour.jpg" alt="" />
    <div id="about-text">
      <h2>ABOUT</h2>
      <p>At Glow Studio, we believe beauty is more than just makeup — it’s the confidence, elegance, and self-love you carry with you. With years of expertise in bridal transformations, party styling, and advanced skincare, our mission is to enhance your natural features while making you feel radiant inside and out. Every look is personalized to reflect your unique style, ensuring you step out glowing, confident, and unforgettable.</p>
<Link to="/about" id='know-btn'>Know More <i class="fa-solid fa-arrow-right"></i></Link>
    </div>
  </section>
    <OurServices/>
  <WhyUs/>
  <Testimonial/>
  </>
  )
}
export default Home