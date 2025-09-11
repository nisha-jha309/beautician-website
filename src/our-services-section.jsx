import "./our-service-section.css"

export default function OurServices(){
    
 const Packages =  [
    {
      "id": 1,
      "name": "Bridal Glow Package",
      "description": "Complete bridal makeover including facial, hair styling, mehendi, and makeup trial.",
      "price": 7999,
      "duration": "5 hours",
      "servicesIncluded": [
        "Bridal Makeup",
        "Hair Styling",
        "Full Body Facial",
        "Mehendi Design",
        "Nail Art"
      ]
    },
    {
      "id": 2,
      "name": "Relax & Refresh",
      "description": "Rejuvenating spa experience for stress relief and glowing skin.",
      "price": 2499,
      "duration": "3 hours",
      "servicesIncluded": [
        "Aromatherapy Massage",
        "Detox Facial",
        "Foot Spa",
        "Scalp Massage"
      ]
    },
    {
      "id": 3,
      "name": "Everyday Beauty Essentials",
      "description": "Basic grooming and care package for your everyday beauty needs.",
      "price": 1299,
      "duration": "2 hours",
      "servicesIncluded": [
        "Threading",
        "Waxing",
        "Hair Cut & Wash",
        "Basic Facial",
        "Manicure"
      ]
    },
    {
      "id": 4,
      "name": "Skin Brightening Package",
      "description": "Advanced skin care treatment to improve complexion and glow.",
      "price": 3499,
      "duration": "2.5 hours",
      "servicesIncluded": [
        "Vitamin C Facial",
        "Skin Polishing",
        "De-tan Pack",
        "Neck & Shoulder Massage"
      ]
    },
    {
      "id": 5,
      "name": "Party Ready Package",
      "description": "Get a stunning party look with quick makeup and styling.",
      "price": 1999,
      "duration": "1.5 hours",
      "servicesIncluded": [
        "HD Makeup",
        "Blow Dry / Curls",
        "Mini Facial",
        "Nail Paint"
      ]
    }
  ]

    return(
        <div id="our-service">
<h2>  Our Services</h2>
        <div id="Services-container">
{Packages.map(pack => (
<div className="service" key={pack.id}>
    <div className="package-info">
  <div className="package-name">{pack.name}</div>
    <div className="package-price">{pack.price} Rs</div>
    </div>
    <div className="package-description">{pack.description}</div>
   <div className="package-servicesIncluded">
            {pack.servicesIncluded.map((service, index) => (
              <div className="package-service-qualities" key={index}>
                {service}
              </div>
            ))}
          </div>

</div>
)
    
)}; 
       
        </div>
        </div>
    )
}