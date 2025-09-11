import "./landing.css"
import { Link } from "react-router-dom"
import Testimonial from "../testimonial-section"
import WhyUs from "../why-us"
import OurServices from "../our-services-section"
import BookingForm from "../booking form"
import MiniFooter from "../mini-footer"


export default function Landing(){
    return (
        <>
<section id="hero">
    <div id='hero-text'>
    <h2>Glow with Confidence</h2>
    <p>Professional beauty services for every occasion</p>
    <button id='booking-btn'>Book Appointment Now</button>
    </div>
    <div id="hero-overlay"></div>
  </section>  
  <section id="offers">
    <h2>Special Limited-Time Offer</h2>
    <p>Book your bridal package today and get <strong>20% OFF</strong> on party makeup for bridesmaids. Hurry, valid until 30th September 2025!</p>
    <Link id="claim-btn">Claim this Offer</Link>
  </section>
  <OurServices/>
  <WhyUs/>
  <Testimonial/>
  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28003.28980226865!2d77.26671923867231!3d28.677342940946705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0f509c976f%3A0x9ec1dbe6a1f4fd3c!2sShahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1757558715512!5m2!1sen!2sin" width="100%" height="450px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    <BookingForm/>
<MiniFooter/>
</>
)
}