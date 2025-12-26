import { Link } from 'react-router-dom'
import logoImg from '../assets/devantalogo.jpeg'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero home-hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">📍</span>
              <span>Hyderabad • Telangana • India</span>
            </div>
            <h1 className="hero-title">
              Innovating supply.<br />
              <span className="title-accent">Delivering trust.</span>
            </h1>
            <p className="hero-text">
              Strategic sourcing partner for pharmaceutical, veterinary and feed-grade raw
              materials, helping you build reliable, compliant and future-ready supply chains.
            </p>
            <p className="hero-tagline">
              Your trusted partner for pharma &amp; veterinary raw materials
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn primary">
                <span>Contact Us</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/products" className="btn ghost">
                <span>Explore Products</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
            <div className="hero-highlights-compact">
              <div className="highlight-item">
                <span className="highlight-icon-compact">🛡️</span>
                <div>
                  <h4>Quality</h4>
                  <p>COA-backed supplies</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon-compact">🤝</span>
                <div>
                  <h4>Reliability</h4>
                  <p>Consistent availability</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon-compact">⚡</span>
                <div>
                  <h4>Timely Delivery</h4>
                  <p>Efficient logistics</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-pill hero-pill-primary"></div>
              <div className="hero-pill hero-pill-secondary"></div>
              <div className="hero-logo-wrapper">
                <img src={logoImg} alt="Devanta Lifesciences" className="hero-logo" />
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-value">10+</span>
                  <span className="stat-label">Therapeutic Segments</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">25+</span>
                  <span className="stat-label">Global API Partners</span>
                </div>
              </div>
              <p className="hero-note">
                Focused on human pharma, veterinary and feed nutrition value chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section home-about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-label">
                <span className="label-dot"></span>
                <span>About Us</span>
              </div>
              <h2>Strategic Raw Material Partner for Regulated Markets</h2>
              <p>
                Devanta Lifesciences partners with qualified manufacturers to deliver
                <strong> APIs, intermediates, excipients and veterinary ingredients</strong> that
                meet global pharmacopeial and regulatory expectations.
              </p>
              <p>
                With a deep understanding of formulation, regulatory and supply chain
                challenges, we help our customers build reliable, compliant and cost-effective
                sourcing strategies.
              </p>
              <Link to="/about" className="text-link-arrow">
                Learn more about us <span>→</span>
              </Link>
            </div>
            <div className="about-cards">
              <article className="feature-card">
                <div className="feature-icon">
                  <span>💊</span>
                </div>
                <h3>Pharmaceutical APIs</h3>
                <p>
                  Focus on high-volume and specialty APIs across anti-infective, CNS,
                  cardiovascular, anti-diabetic and oncology segments.
                </p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">
                  <span>🐾</span>
                </div>
                <h3>Veterinary &amp; Feed</h3>
                <p>
                  Comprehensive portfolio for livestock, poultry and companion animal
                  formulations and feed nutrition.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section home-products">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-label">
              <span className="label-dot"></span>
              <span>Our Products</span>
            </div>
            <h2>Core Product Categories</h2>
            <p>Specialized sourcing for human pharma, veterinary and feed applications.</p>
          </div>
          <div className="product-cards-grid">
            <article className="product-category-card">
              <div className="category-card-header">
                <div className="category-icon-box">
                  <span className="category-emoji">💊</span>
                </div>
                <div>
                  <h3>Pharmaceutical Raw Materials</h3>
                  <p className="category-subtitle">APIs &amp; intermediates for regulated and semi-regulated markets.</p>
                </div>
              </div>
              <div className="category-tags">
                <span className="category-tag">Paracetamol</span>
                <span className="category-tag">Metformin HCl</span>
                <span className="category-tag">Ibuprofen</span>
                <span className="category-tag">Azithromycin</span>
                <span className="category-tag">Atorvastatin</span>
                <span className="category-tag">Cefixime</span>
                <span className="category-tag">Cefuroxime</span>
              </div>
              <Link to="/products" className="category-link">
                View full API list <span>→</span>
              </Link>
            </article>
            <article className="product-category-card">
              <div className="category-card-header">
                <div className="category-icon-box">
                  <span className="category-emoji">⚗️</span>
                </div>
                <div>
                  <h3>Impurities, Excipients &amp; Granules</h3>
                  <p className="category-subtitle">
                    Functional excipients and custom granules tailored to your formulation needs.
                  </p>
                </div>
              </div>
              <div className="category-tags">
                <span className="category-tag">MCC</span>
                <span className="category-tag">PVP K30</span>
                <span className="category-tag">Magnesium Stearate</span>
                <span className="category-tag">Lactose Monohydrate</span>
                <span className="category-tag">HPMC</span>
                <span className="category-tag">Starch derivatives</span>
              </div>
              <Link to="/products#excipients" className="category-link">
                Explore excipients <span>→</span>
              </Link>
            </article>
            <article className="product-category-card">
              <div className="category-card-header">
                <div className="category-icon-box">
                  <span className="category-emoji">🐾</span>
                </div>
                <div>
                  <h3>Veterinary Raw Materials</h3>
                  <p className="category-subtitle">
                    APIs and additives for livestock, poultry and companion animal health.
                  </p>
                </div>
              </div>
              <div className="category-tags">
                <span className="category-tag">Veterinary APIs</span>
                <span className="category-tag">Feed additives</span>
                <span className="category-tag">Premix ingredients</span>
                <span className="category-tag">Nutritive blends</span>
              </div>
              <Link to="/products#veterinary" className="category-link">
                View veterinary range <span>→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section home-industries">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-label">
              <span className="label-dot"></span>
              <span>Industries</span>
            </div>
            <h2>Industries We Serve</h2>
            <p>
              Enabling quality and compliance across human pharma, veterinary and allied
              industries.
            </p>
          </div>
          <div className="industries-cards-grid">
            <article className="industry-modern-card">
              <div className="industry-icon-wrapper">
                <span className="industry-icon">🏭</span>
              </div>
              <h3>Pharma Formulation Companies</h3>
              <p>
                API and excipient sourcing for tablets, capsules, injectables, liquids and
                more.
              </p>
            </article>
            <article className="industry-modern-card">
              <div className="industry-icon-wrapper">
                <span className="industry-icon">🐄</span>
              </div>
              <h3>Veterinary Manufacturers</h3>
              <p>
                Ingredients tailored to animal health formulations and dosage forms.
              </p>
            </article>
            <article className="industry-modern-card">
              <div className="industry-icon-wrapper">
                <span className="industry-icon">🌾</span>
              </div>
              <h3>Feed &amp; Nutrition Industry</h3>
              <p>
                Additives and premix ingredients for livestock and poultry nutrition.
              </p>
            </article>
            <article className="industry-modern-card">
              <div className="industry-icon-wrapper">
                <span className="industry-icon">🔬</span>
              </div>
              <h3>Chemical &amp; Biotech Companies</h3>
              <p>
                Intermediates and specialty chemicals for R&amp;D and commercial production.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="section home-quality">
        <div className="container quality-container">
          <div className="quality-content">
            <div className="quality-header">
              <div className="section-label light">
                <span className="label-dot"></span>
                <span>Quality Assurance</span>
              </div>
              <h2>Quality &amp; Compliance at the Core</h2>
              <p>
                Every batch is supplied with detailed Certificates of Analysis and supported by
                regulatory documentation where applicable.
              </p>
            </div>
            <div className="quality-features">
              <div className="quality-feature-item">
                <div className="quality-icon-box">
                  <span className="quality-check">✓</span>
                </div>
                <div>
                  <h4>COA for Every Batch</h4>
                  <p>Full traceability and documentation</p>
                </div>
              </div>
              <div className="quality-feature-item">
                <div className="quality-icon-box">
                  <span className="quality-check">✓</span>
                </div>
                <div>
                  <h4>IP / BP / USP / EP</h4>
                  <p>Compliance with major pharmacopeias</p>
                </div>
              </div>
              <div className="quality-feature-item">
                <div className="quality-icon-box">
                  <span className="quality-check">✓</span>
                </div>
                <div>
                  <h4>Vendor Audits</h4>
                  <p>Qualified and monitored partners</p>
                </div>
              </div>
            </div>
            <Link to="/quality" className="btn ghost light">
              Learn more about quality <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section home-cta">
        <div className="container cta-container">
          <div className="cta-content-modern">
            <div className="cta-text">
              <h2>Ready to Partner with Us?</h2>
              <p>
                Share your product requirements and regulatory expectations.
                Our team will respond with tailored sourcing options.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn primary large">
                Get in Touch
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/products" className="btn ghost large">
                Browse Products
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
