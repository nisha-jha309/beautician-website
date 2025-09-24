
import { Link } from "react-router-dom"
import './footer.css'
export default function Footer() {
    return (
        <div id="footer">
            <div id="footer-up">
                <div id="footer-brand">
                    <img src="src\assets\brand.png" alt="" style={{ width: "100px", heigth: "70px" }} />
                    <p>Glow Studio brings out the best version of you.
                        Specialized in makeup, skincare, and hairstyling.</p>
                </div>
                <div className="footer-list">
                    <h2>Quick Links</h2>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-list">
                    <h2>Contact</h2>
                    <div className="contact-list">
                        <i className="fa-solid fa-location-dot"></i>
                        <pre>{`Tress & Glow Beauty Salon
Shop No. 12, Rosewood Complex,
MG Road, Shahdara, Delhi – 110032, India`}</pre>
                    </div>
                    <div className="contact-list">
                        <i className="fa-solid fa-phone"></i>
                        <p>+91 1234567890</p>
                        </div>

<div className="contact-list">
    <i className="fa-solid fa-envelope"></i>
                        <p>glowstudio.contact@gmail.com</p></div>                    
                    </div>
                <div id="opening-time">
                    <h2>Opening Hours</h2>
                    <p>MON-FRI (9:30 AM -10:00 PM)</p>
                    <p>SAT-SUN (9:00 AM -9:00 PM)</p>
                </div>
            </div>
            <div id="copyright-section"><p>Copyright @ 2025 <strong>GlowStudio</strong> | All Rights Reserved</p></div>
        </div>
    )
}