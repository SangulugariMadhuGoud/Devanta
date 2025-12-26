import { Link } from 'react-router-dom'

function Industries() {
  const industries = [
    {
      title: 'Pharma Formulation Companies',
      icon: '🏭',
      description: 'Supply of APIs, intermediates, excipients and impurities for tablets, capsules, injectables, liquids and other dosage forms, supporting both development and commercial production.',
      services: [
        'API & Excipient Sourcing',
        'Tablet & Capsule Formulations',
        'Injectable Solutions',
        'Liquid Dosage Forms',
        'Regulatory Documentation'
      ],
      color: 'primary'
    },
    {
      title: 'Veterinary Manufacturers',
      icon: '🐄',
      description: 'Veterinary APIs and ingredients tailored to livestock, poultry and companion animal formulations, ensuring consistent quality and regulatory support.',
      services: [
        'Veterinary APIs',
        'Livestock Health Products',
        'Poultry Formulations',
        'Companion Animal Care',
        'Quality Assurance'
      ],
      color: 'accent'
    },
    {
      title: 'Feed & Nutrition Industry',
      icon: '🌾',
      description: 'Feed additives, premix ingredients and functional components that enhance animal performance, gut health and overall nutrition outcomes.',
      services: [
        'Feed Additives',
        'Premix Ingredients',
        'Nutritional Blends',
        'Performance Enhancers',
        'Gut Health Solutions'
      ],
      color: 'primary'
    },
    {
      title: 'Chemical & Biotech Companies',
      icon: '🔬',
      description: 'Specialty chemicals, intermediates and selected raw materials for R&D labs, pilot plants and commercial-scale operations in chemical and biotech segments.',
      services: [
        'Specialty Chemicals',
        'Research & Development',
        'Pilot Plant Support',
        'Commercial Scale Supply',
        'Technical Support'
      ],
      color: 'accent'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero industries-hero">
        <div className="container">
          <div className="section-label">
            <span className="label-dot"></span>
            <span>Industries Served</span>
          </div>
          <h1>Supporting Healthcare &amp; Nutrition Value Chains</h1>
          <p className="hero-description">
            Devanta Lifesciences works closely with customers across pharmaceutical, veterinary,
            feed and allied industries, aligning raw material sourcing with their technical and
            regulatory needs.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section industries-main">
        <div className="container">
          <div className="industries-modern-grid">
            {industries.map((industry, index) => (
              <article key={index} className={`industry-modern-card industry-${industry.color}`}>
                <div className="industry-card-header">
                  <div className="industry-icon-large">
                    <span>{industry.icon}</span>
                  </div>
                  <h2>{industry.title}</h2>
                </div>
                <p className="industry-description">{industry.description}</p>
                <div className="industry-services">
                  <h4>Key Services</h4>
                  <ul className="services-list">
                    {industry.services.map((service, idx) => (
                      <li key={idx}>
                        <span className="service-check">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="industry-footer">
                  <Link to="/contact" className="industry-badge">
                    Learn More
                    <span className="badge-arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section industries-benefits">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-label">
              <span className="label-dot"></span>
              <span>Why Choose Us</span>
            </div>
            <h2>What We Offer to Every Industry</h2>
            <p>
              Comprehensive solutions tailored to meet the unique needs of each sector we serve.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📋</div>
              <h3>Regulatory Expertise</h3>
              <p>Deep understanding of industry-specific regulations and compliance requirements.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔍</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control and documentation for every batch supplied.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌐</div>
              <h3>Global Sourcing</h3>
              <p>Access to worldwide suppliers and manufacturers for diverse product needs.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>Quick turnaround times for quotes, samples, and order processing.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💼</div>
              <h3>Technical Support</h3>
              <p>Expert guidance on product selection and formulation requirements.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h3>Partnership Approach</h3>
              <p>Long-term relationships built on trust, reliability, and mutual success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section industries-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2>Ready to Partner with Us?</h2>
              <p>
                Whether you're in pharmaceuticals, veterinary, feed, or biotech, we have the
                expertise and resources to support your raw material needs.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn primary large">
                  Get in Touch
                  <span className="btn-arrow">→</span>
                </Link>
                <Link to="/products" className="btn ghost large">
                  View Products
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Industries
