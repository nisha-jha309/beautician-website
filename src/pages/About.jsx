import React, { useEffect, useState } from "react";
import styles from "./about.module.css"; 

export default function About() {
  // Animated counters
  const [haircuts, setHaircuts] = useState(0);
  const [facials, setFacials] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const interval = setInterval((onLoad) => {
      setHaircuts((prev) => (prev < 2500 ? prev + 25 : 2500));
      setFacials((prev) => (prev < 1200 ? prev + 12 : 1200));
      setSatisfaction((prev) => (prev < 98 ? prev + 1 : 98));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <video src="src\assets\about-background.mp4" autoPlay muted loop playsInline></video>
        <div className={styles.heroContent}>
          <h1>GlowStudio: Beauty, Confidence, You</h1>
          <p>Crafting personalized beauty experiences since 2018</p>
        </div>
        <div className={styles.overlay}></div>
      </section>

      {/* Salon Journey / Timeline */}
      <section className={styles.timeline}>
        <h2>Our Journey</h2>
        <div className={styles.timelineEvents}>
          <div className={styles.event}>
            <div className={styles.eventCircle}><i class="fa-solid fa-scissors"></i></div>
            <span className={styles.year}>2020</span>
            <p>Salon Founded</p>
          </div>
          <div className={styles.event}>
            <div className={styles.eventCircle}><i class="fa-solid fa-spa"></i></div>
            <span className={styles.year}>2021</span>
            <p>Expanded Services</p>
          </div>
          <div className={styles.event}>
            <div className={styles.eventCircle}><i class="fa-solid fa-face-smile"></i></div>
            <span className={styles.year}>2023</span>
            <p>1000+ Happy Clients</p>
          </div>
          <div className={styles.event}>
  <div className={styles.eventCircle}><i class="fa-solid fa-heart"></i></div>
  <span className={styles.year}>2025</span>
  <p>2000+ Happy Clients 🥳</p>
</div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2>Meet Our Experts</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <img src="https://via.placeholder.com/150" alt="Stylist 1" />
            <h3>Alice Sharma</h3>
            <p>Hair Specialist</p>
          </div>
          <div className={styles.teamCard}>
            <img src="https://via.placeholder.com/150" alt="Stylist 2" />
            <h3>Rina Kapoor</h3>
            <p>Skin & Facial Expert</p>
          </div>
          <div className={styles.teamCard}>
            <img src="https://via.placeholder.com/150" alt="Stylist 3" />
            <h3>Neha Jain</h3>
            <p>Manicure & Pedicure</p>
          </div>
        </div>
      </section>

      {/* Experience Counters */}
      <section className={styles.counters}>
        <div className={styles.counterCard}>
          <h3>{haircuts}+</h3>
          <p>Haircuts Done</p>
        </div>
        <div className={styles.counterCard}>
          <h3>{facials}+</h3>
          <p>Facials Performed</p>
        </div>
        <div className={styles.counterCard}>
          <h3>{satisfaction}%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Book Your Appointment Today!</h2>
        <button className={styles.book} onClick={() => (window.location.href = "/contact")}>
          Book Now
        </button>
      </section>
    </div>
  );
}
