
import styles from './Contact.module.css';

function Contact() {
    return (
        <>
            {/* Hero Section */}
            <div className={styles.heroSection}>
                <div className={styles.heroSectionText}>
                    <h2>Get In Touch</h2>
                    <p>We’d love to hear from you. Book an appointment or ask any questions.</p>
                </div>
                <div className={styles.overlay}></div>
            </div>

            {/* Contact Section */}
            <div className={styles.contactSection}>
                <div className={styles.infoSection}>
                    <h2>Contact Info</h2>

                    <div className={styles.info}>
                        <i className="fa-solid fa-location-dot"></i>
                        <pre>{`Tress & Glow Beauty Salon
Shop No. 12, Rosewood Complex,
MG Road, Shahdara, Delhi – 110032, India`}</pre>
                    </div>

                    <div className={styles.info}>
                        <i className="fa-solid fa-phone"></i>
                        <p>+91 1234567890</p>
                    </div>

                    <div className={styles.info}>
                        <i className="fa-solid fa-envelope"></i>
                        <p>glowstudio.contact@gmail.com</p>
                    </div>

                    <div className={styles.info}>
                        <i className="fa-solid fa-stopwatch"></i>
                        <pre>{`MON-FRI (9:30 AM -10:00 PM)
SAT-SUN (9:00 AM -9:00 PM)`}</pre>
                    </div>
                </div>

                {/* Form Section */}
                <div className={styles.formSection}>
                    <h2>Send us a Message</h2>
                    <form className={styles.contactForm}>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <input type="tel" placeholder="Your Phone" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit" className={styles.submit}>Submit</button>
                    </form>
                </div>
            </div>

            {/* Social Links */}
            <div className={styles.followSection}>
                <h2>Follow Us On</h2>
                <div className={styles.socialLinks}>
                    <a href="https://facebook.com/yourbeautysalon" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="https://instagram.com/yourbeautysalon" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/yourbeautysalon" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://pinterest.com/yourbeautysalon" target="_blank"><i className="fab fa-pinterest"></i></a>
                    <a href="https://youtube.com/@yourbeautysalon" target="_blank"><i className="fab fa-youtube"></i></a>
                </div>
            </div>

            {/* Map Embed */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56006.54184271846!2d77.2461188255804!3d28.677413568208735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0f509c976f%3A0x9ec1dbe6a1f4fd3c!2sShahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1758480078211!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
    )
}

export default Contact;
