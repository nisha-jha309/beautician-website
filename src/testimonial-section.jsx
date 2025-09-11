import "./testimonial-section.css"

export default function Testimonial(){
    const reviews=[
  {
    "id": 1,
    "customerName": "Nisha Sharma",
    "ratingStars": 5,
    "review": "Absolutely loved the service! My skin feels so fresh and glowing.",
    "customerPic": "src/assets/avatar1.png"
  },
  {
    "id": 2,
    "customerName": "Priya Singh",
    "ratingStars": 5,
    "review": "The beauticians are very professional and attentive. A truly relaxing experience.",
    "customerPic": "src/assets/avatar2.png"
  },
  {
    "id": 3,
    "customerName": "Sneha Joshi",
    "ratingStars": 4,
    "review": "Lovely ambience and excellent care. I always leave happy and satisfied.",
    "customerPic": "src/assets/avatar3.png"
  },
  {
    "id": 4,
    "customerName": "Amit Verma",
    "ratingStars": 5,
    "review": "Highly recommend this salon! Every treatment feels personalized and perfect.",
    "customerPic": "src/assets/avatar4.png"
  }
]

    return(
       
        <section id="testimonial">
            <h2>What Our Clients Say</h2>
               <div id="testimonial-container">
                {reviews.map((item) => (
                    <div key={item.id} className="testimonial-card">
                        <img src={item.customerPic} alt={item.customerName} />
                        <div className="testimonial-text">
                            <div className="review">{item.review}</div>
                            <div className="customer-info">
                                <div className="customer-name">- {item.customerName}</div>
                                <div className="rating">
                                    {"⭐".repeat(item.ratingStars)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}