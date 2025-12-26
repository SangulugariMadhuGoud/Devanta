import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      alert('Thank you for your enquiry! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="container">
          <div className="section-label">
            <span className="label-dot"></span>
            <span>Contact Us</span>
          </div>
          <h1>Get in Touch</h1>
          <p className="hero-description">
            Have questions or need assistance? We're here to help. Send us a message and we'll get back to you soon.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section contact-main-simple">
        <div className="container">
          <div className="contact-simple-layout">
            {/* Contact Form */}
            <div className="contact-form-simple">
              <h2>Send us a message</h2>
              <form onSubmit={handleSubmit} className="simple-form">
                <div className="form-field-simple">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field-simple">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field-simple">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91-XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field-simple">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn primary large submit-btn-simple"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-simple">
              <h2>Contact Information</h2>
              
              <div className="info-item-simple">
                <div className="info-icon">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>Suraram X Road<br />Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="info-item-simple">
                <div className="info-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:info@devantalifesciences.com">info@devantalifesciences.com</a>
                </div>
              </div>

              <div className="info-item-simple">
                <div className="info-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+910000000000">+91-00000 00000</a>
                </div>
              </div>

              <div className="map-wrapper-simple">
                <iframe
                  className="map-embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3950308131637!2d78.434!3d17.488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fd6b4b4e0a1%3A0x0!2sSuraram%20X%20Road%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
                  allowFullScreen
                  title="Devanta Lifesciences Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
