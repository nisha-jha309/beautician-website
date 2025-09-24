import React, { useState } from "react";
import styles from './Faq.module.css'; // optional CSS module

export default function FAQ() {
  const faqs = [
    {
      question: "How long does a bridal package take?",
      answer: "A complete bridal package usually takes around 5-6 hours depending on the services included."
    },
    {
      question: "Do you provide trial sessions?",
      answer: "Yes, we provide trial sessions for bridal makeup so you can be confident with your look on the big day."
    },
    {
      question: "Can I customize a package?",
      answer: "Absolutely! You can mix and match services from different packages as per your requirement."
    },
    {
      question: "Do you provide home service?",
      answer: "Yes, we offer home services for select packages. Please contact us for availability and charges."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book directly through our website, call us, or message us on WhatsApp."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div 
              className={styles.question} 
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={styles.icon}>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
