import { useState } from 'react'

function Products() {
  const [activeTab, setActiveTab] = useState('pharma')

  const pharmaAPIs = [
    'Paracetamol', 'Metformin HCl', 'Ibuprofen', 'Azithromycin',
    'Atorvastatin', 'Cefixime', 'Cefuroxime', 'Sacubitril/Valsartan',
    'Rimegepant', 'Rivaroxaban', 'Ezetimibe', 'Bilastine',
    'Dorzolamide HCl', 'Suvorexant', 'Amlodipine', 'Omeprazole'
  ]

  const therapeuticSegments = [
    { name: 'Anti-infectives', icon: '🦠' },
    { name: 'CNS', icon: '🧠' },
    { name: 'Cardiovascular', icon: '❤️' },
    { name: 'Anti-diabetic', icon: '💉' },
    { name: 'Oncology', icon: '🔬' },
    { name: 'Pain & inflammation', icon: '💊' },
    { name: 'Respiratory & allergy', icon: '🌬️' }
  ]

  const excipients = [
    'Microcrystalline Cellulose (MCC)',
    'Polyvinylpyrrolidone K30 (PVP K30)',
    'Magnesium Stearate',
    'Lactose Monohydrate',
    'Hydroxypropyl Methylcellulose (HPMC)',
    'Starch derivatives',
    'Sodium Starch Glycolate',
    'Crospovidone',
    'Talc',
    'Colloidal Silicon Dioxide'
  ]

  const granules = [
    'Pre-granulated blends for oral solid dosage forms',
    'Tailored granulation specifications (particle size, density, flow)',
    'Intermediates aligned with your process and regulatory strategy',
    'Support for exhibit batches and technology transfers',
    'Customized formulations per customer requirements',
    'Scale-up support from lab to commercial scale'
  ]

  const vetAPIs = [
    'Anti-infective APIs for livestock and poultry',
    'Antiparasitic APIs for animal health',
    'Anti-inflammatory APIs for companion animals',
    'APIs for poultry and livestock health formulations',
    'APIs for companion animal care products',
    'Veterinary-grade active ingredients'
  ]

  const feedAdditives = [
    'Feed additives and performance enhancers',
    'Mineral & vitamin premix ingredients',
    'Functional ingredients for gut health and immunity',
    'Solutions tailored to livestock, poultry and pet nutrition',
    'Probiotics and prebiotics',
    'Antioxidants and preservatives'
  ]

  return (
    <>
      <section className="page-hero products-hero">
        <div className="container">
          <p className="pill-heading">
            <span className="pill-heading-dot"></span>
            Product Portfolio
          </p>
          <h1>Comprehensive Raw Material Solutions</h1>
          <p className="hero-subtitle">
            From pharmaceutical APIs to veterinary ingredients and excipients, we deliver
            quality-assured raw materials that power your formulations.
          </p>
        </div>
      </section>

      {/* Product Categories Tabs */}
      <section className="products-tabs-section">
        <div className="container">
          <div className="product-tabs">
            <button
              className={`product-tab ${activeTab === 'pharma' ? 'active' : ''}`}
              onClick={() => setActiveTab('pharma')}
            >
              <span className="tab-icon">💊</span>
              <span>Pharmaceutical APIs</span>
            </button>
            <button
              className={`product-tab ${activeTab === 'excipients' ? 'active' : ''}`}
              onClick={() => setActiveTab('excipients')}
            >
              <span className="tab-icon">⚗️</span>
              <span>Excipients & Granules</span>
            </button>
            <button
              className={`product-tab ${activeTab === 'veterinary' ? 'active' : ''}`}
              onClick={() => setActiveTab('veterinary')}
            >
              <span className="tab-icon">🐾</span>
              <span>Veterinary & Feed</span>
            </button>
          </div>
        </div>
      </section>

      <section className="page-content products-content">
        <div className="container">
          {/* Pharmaceutical APIs Section */}
          {activeTab === 'pharma' && (
            <div className="product-category-section">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <span className="category-icon">💊</span>
                </div>
                <div>
                  <h2>Pharmaceutical Raw Materials (APIs)</h2>
                  <p className="category-description">
                    Sourcing from audited manufacturers, our API portfolio supports a wide range of
                    oral solid, liquid and injectable formulations for regulated and semi-regulated markets.
                    Every product comes with comprehensive documentation and quality assurance.
                  </p>
                </div>
              </div>

              <div className="product-grid-section">
                <div className="product-card featured-card">
                  <div className="card-header">
                    <h3>Trending APIs</h3>
                    <p className="card-subtitle">High-demand pharmaceutical active ingredients</p>
                  </div>
                  <div className="product-tags-grid">
                    {pharmaAPIs.map((api, index) => (
                      <span key={index} className="product-tag">
                        {api}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-header">
                    <h3>Therapeutic Segments</h3>
                    <p className="card-subtitle">Comprehensive coverage across major therapeutic areas</p>
                  </div>
                  <div className="therapeutic-grid">
                    {therapeuticSegments.map((segment, index) => (
                      <div key={index} className="therapeutic-item">
                        <span className="therapeutic-icon">{segment.icon}</span>
                        <span className="therapeutic-name">{segment.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="features-box">
                <h4>Key Features</h4>
                <div className="features-list">
                  <div className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>IP/BP/USP/EP compliant grades available</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>COA provided with every batch</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>Sourced from audited and qualified vendors</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>Support for regulatory documentation</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Excipients & Granules Section */}
          {activeTab === 'excipients' && (
            <div className="product-category-section">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <span className="category-icon">⚗️</span>
                </div>
                <div>
                  <h2>Impurities, Excipients & Granules</h2>
                  <p className="category-description">
                    We support formulation development and scale-up with pharmaceutical-grade excipients,
                    qualified impurities and tailor-made granules to suit your process requirements.
                    Custom solutions for your specific formulation needs.
                  </p>
                </div>
              </div>

              <div className="product-grid-section">
                <div className="product-card">
                  <div className="card-header">
                    <h3>Key Excipients</h3>
                    <p className="card-subtitle">Pharmaceutical-grade functional excipients</p>
                  </div>
                  <div className="product-list">
                    {excipients.map((excipient, index) => (
                      <div key={index} className="product-list-item">
                        <span className="list-bullet">•</span>
                        <span>{excipient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-header">
                    <h3>Customized Granules & Intermediates</h3>
                    <p className="card-subtitle">Tailored solutions for your formulation needs</p>
                  </div>
                  <div className="product-list">
                    {granules.map((item, index) => (
                      <div key={index} className="product-list-item">
                        <span className="list-bullet">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="features-box">
                <h4>Our Capabilities</h4>
                <div className="features-list">
                  <div className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>Custom granulation specifications</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>Particle size, density, and flow optimization</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>Technology transfer support</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>Scale-up from lab to commercial production</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Veterinary & Feed Section */}
          {activeTab === 'veterinary' && (
            <div className="product-category-section">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  <span className="category-icon">🐾</span>
                </div>
                <div>
                  <h2>Veterinary Raw Materials</h2>
                  <p className="category-description">
                    Serving <strong>livestock, poultry and companion animal</strong> health segments,
                    Devanta Lifesciences offers veterinary APIs and feed-focused ingredients that align
                    with animal health and nutrition objectives.
                  </p>
                </div>
              </div>

              <div className="product-grid-section">
                <div className="product-card">
                  <div className="card-header">
                    <h3>Veterinary APIs</h3>
                    <p className="card-subtitle">Active ingredients for animal health</p>
                  </div>
                  <div className="product-list">
                    {vetAPIs.map((item, index) => (
                      <div key={index} className="product-list-item">
                        <span className="list-bullet">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="product-card">
                  <div className="card-header">
                    <h3>Feed Additives & Nutrition</h3>
                    <p className="card-subtitle">Nutritional solutions for animal health</p>
                  </div>
                  <div className="product-list">
                    {feedAdditives.map((item, index) => (
                      <div key={index} className="product-list-item">
                        <span className="list-bullet">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="features-box">
                <h4>Application Areas</h4>
                <div className="application-grid">
                  <div className="application-item">
                    <span className="app-icon">🐄</span>
                    <span className="app-name">Livestock</span>
                  </div>
                  <div className="application-item">
                    <span className="app-icon">🐔</span>
                    <span className="app-name">Poultry</span>
                  </div>
                  <div className="application-item">
                    <span className="app-icon">🐕</span>
                    <span className="app-name">Companion Animals</span>
                  </div>
                  <div className="application-item">
                    <span className="app-icon">🐟</span>
                    <span className="app-name">Aquaculture</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Products
