import styles from './Services.module.css'
import React, { useState } from "react";
import Testimonial from '../testimonial-section';
import FAQ from '../Faq';
import BookingForm from '../booking form';

export default function Services(){
    const Packages = [
  {
    id: 1,
    name: "Bridal Glow Package",
    category: "Bridal",
    description: "Complete bridal makeover including facial, hair styling, mehendi, and makeup trial.",
    price: 7999,
    duration: "5 hours",
    src:"src/assets/bridal.jpg",
    servicesIncluded: [
      "Bridal Makeup",
      "Hair Styling",
      "Full Body Facial",
      "Mehendi Design",
      "Nail Art"
    ]
  },
  {
    id: 2,
    name: "Relax & Refresh",
    category: "Spa",
    description: "Rejuvenating spa experience for stress relief and glowing skin.",
    price: 2499,
    duration: "3 hours",
    src:"src/assets/spa.jpg",
    servicesIncluded: [
      "Aromatherapy Massage",
      "Detox Facial",
      "Foot Spa",
      "Scalp Massage"
    ]
  },
  {
    id: 3,
    name: "Everyday Beauty Essentials",
    category: "Daily Care",
    description: "Basic grooming and care package for your everyday beauty needs.",
    price: 1299,
    duration: "2 hours",
    src:"src/assets/daily-care.jpg",
    servicesIncluded: [
      "Threading",
      "Waxing",
      "Hair Cut & Wash",
      "Basic Facial",
      "Manicure"
    ]
  },
  {
    id: 4,
    name: "Skin Brightening Package",
    category: "Skin Care",
    description: "Advanced skin care treatment to improve complexion and glow.",
    price: 3499,
    duration: "2.5 hours",
    src:"src/assets/skin-care.jpg",
    servicesIncluded: [
      "Vitamin C Facial",
      "Skin Polishing",
      "De-tan Pack",
      "Neck & Shoulder Massage"
    ]
  },
  {
    id: 5,
    name: "Party Ready Package",
    category: "Party",
    description: "Get a stunning party look with quick makeup and styling.",
    price: 1999,
    duration: "1.5 hours",
    src:"src/assets/party.jpg",
    servicesIncluded: [
      "HD Makeup",
      "Blow Dry / Curls",
      "Mini Facial",
      "Nail Paint"
    ]
  }
];

  const [activeCategory, setActiveCategory] = useState("All");

    return(
        <div className={styles.serviceSection}>
        <div className={styles.hero}>
        <div className={styles.heroContent}>
            <h1>Our Services</h1>
            <p>Experience Premium Care, Tailored for You</p>
        </div>  
        <div className={styles.overlay}></div>   
        </div>
        <div className={styles.categorySection}>      
        <div className={styles.categories}>
           <div className= {`${styles.category} ${activeCategory=== "All" ? styles.activeService:""}`} onClick={()=>setActiveCategory("All")}>All</div>

            {Packages.map((pack)=>(
                <div className= {`${styles.category} ${activeCategory===pack.category? styles.activeService:""}`} key={pack.id} onClick={()=>setActiveCategory(pack.category)}>{pack.category}</div>
                 ))}
                              </div>
                <div className={styles.packages}>
        {Packages.filter(
          (pkg) => activeCategory === "All" || pkg.category === activeCategory
        ).map((pkg) => (
          <div key={pkg.id} className={styles.packageCard}>
            <div className={styles.packageCardContent}>
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p>Duration: {pkg.duration}</p>
            <p>Price: ₹{pkg.price}</p>
            <ul>
              {pkg.servicesIncluded.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
            </div>
            <img className={styles.packageCardImage} src={pkg.src}></img>
          </div>
        ))}
      </div>
        </div>
        <Testimonial/>
        <BookingForm/>
        <FAQ/>
        </div>
    )
}