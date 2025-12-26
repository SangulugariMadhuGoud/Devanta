function Quality() {
  const qualityAssurance = [
    {
      title: 'COA for Every Batch',
      icon: '📋',
      description: 'Detailed Certificates of Analysis provided with every batch, detailing tested parameters and specifications for full traceability.',
      details: 'Complete documentation of all quality parameters'
    },
    {
      title: 'Pharmacopeial Standards',
      icon: '📖',
      description: 'Alignment with IP/BP/USP/EP standards where applicable, along with customer-specific requirements.',
      details: 'IP • BP • USP • EP compliance'
    },
    {
      title: 'Vendor Qualification',
      icon: '✅',
      description: 'Structured vendor qualification and audits to evaluate manufacturing controls, documentation and compliance.',
      details: 'Regular audits and assessments'
    },
    {
      title: 'Batch Documentation',
      icon: '📦',
      description: 'Batch-wise documentation and sample retention practices, supporting investigations and continuous improvement.',
      details: 'Full traceability and retention'
    }
  ]

  const complianceFeatures = [
    {
      title: 'Regulatory Documentation',
      icon: '📄',
      description: 'Support with DMF/ASMF references (where available), stability data and technical packages through partner manufacturers.',
      tags: ['DMF', 'ASMF', 'Stability Data']
    },
    {
      title: 'Transparent Communication',
      icon: '💬',
      description: 'Clear communication on product regulatory status, manufacturing sites and certifications.',
      tags: ['Regulatory Status', 'Site Info', 'Certifications']
    },
    {
      title: 'Quality Agreements',
      icon: '🤝',
      description: 'Alignment with customer quality agreements and change-control expectations.',
      tags: ['Quality Agreements', 'Change Control']
    }
  ]

  const workProcess = [
    {
      title: 'Vendor Audits',
      icon: '🔍',
      description: 'Regular assessments and audits of key manufacturing partners to ensure adherence to cGMP and quality management systems.',
      step: '01'
    },
    {
      title: 'Regulatory Support',
      icon: '📚',
      description: 'Coordination with manufacturers to provide dossiers, questionnaires and required documents during regulatory filings or customer audits.',
      step: '02'
    },
    {
      title: 'Continuous Improvement',
      icon: '📈',
      description: 'Feedback-driven improvements in specifications, documentation and service levels, aligned with evolving market and regulatory needs.',
      step: '03'
    }
  ]

  const standards = [
    { name: 'IP', fullName: 'Indian Pharmacopoeia' },
    { name: 'BP', fullName: 'British Pharmacopoeia' },
    { name: 'USP', fullName: 'United States Pharmacopeia' },
    { name: 'EP', fullName: 'European Pharmacopoeia' },
    { name: 'cGMP', fullName: 'Current Good Manufacturing Practice' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero quality-hero">
        <div className="container">
          <div className="section-label">
            <span className="label-dot"></span>
            <span>Quality & Compliance</span>
          </div>
          <h1>Quality-First Approach to Every Batch</h1>
          <p className="hero-description">
            Devanta Lifesciences integrates quality and compliance into sourcing, qualification and
            supply processes to support our customers' regulatory and manufacturing requirements.
          </p>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="section quality-assurance">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-label">
              <span className="label-dot"></span>
              <span>Quality Assurance</span>
            </div>
            <h2>Rigorous Quality Standards</h2>
            <p>
              Every product we supply meets stringent quality criteria, backed by comprehensive
              documentation and traceability.
            </p>
          </div>
          <div className="quality-grid">
            {qualityAssurance.map((item, index) => (
              <div key={index} className="quality-card">
                <div className="quality-card-icon">
                  <span>{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="quality-detail">
                  <span className="detail-icon">✓</span>
                  <span>{item.details}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section quality-compliance">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-label">
              <span className="label-dot"></span>
              <span>Compliance & Documentation</span>
            </div>
            <h2>Comprehensive Regulatory Support</h2>
            <p>
              We ensure full compliance with regulatory requirements and provide complete
              documentation for your needs.
            </p>
          </div>
          <div className="compliance-grid">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="compliance-card">
                <div className="compliance-icon-box">
                  <span>{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="compliance-tags">
                  {feature.tags.map((tag, idx) => (
                    <span key={idx} className="compliance-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="section quality-standards">
        <div className="container">
          <div className="standards-content">
            <div className="standards-header">
              <div className="section-label">
                <span className="label-dot"></span>
                <span>Standards & Certifications</span>
              </div>
              <h2>Pharmacopeial Standards We Follow</h2>
              <p>
                Our products comply with major international pharmacopeial standards, ensuring
                global acceptance and regulatory compliance.
              </p>
            </div>
            <div className="standards-grid">
              {standards.map((standard, index) => (
                <div key={index} className="standard-item">
                  <div className="standard-badge">
                    <span className="standard-code">{standard.name}</span>
                  </div>
                  <p className="standard-name">{standard.fullName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section quality-process">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-label">
              <span className="label-dot"></span>
              <span>Our Process</span>
            </div>
            <h2>How We Work With You</h2>
            <p>
              A systematic approach to quality management and regulatory compliance.
            </p>
          </div>
          <div className="process-grid">
            {workProcess.map((process, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{process.step}</div>
                <div className="process-icon-box">
                  <span>{process.icon}</span>
                </div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="section quality-commitment">
        <div className="container">
          <div className="commitment-box">
            <div className="commitment-content">
              <div className="commitment-icon-large">🛡️</div>
              <h2>Our Quality Commitment</h2>
              <p>
                At Devanta Lifesciences, quality is not just a process—it's our promise. We are
                committed to delivering products that meet the highest standards of quality,
                safety, and regulatory compliance. Every batch is a testament to our dedication
                to excellence.
              </p>
              <div className="commitment-points">
                <div className="commitment-point">
                  <span className="point-check">✓</span>
                  <span>100% batch traceability</span>
                </div>
                <div className="commitment-point">
                  <span className="point-check">✓</span>
                  <span>Comprehensive documentation</span>
                </div>
                <div className="commitment-point">
                  <span className="point-check">✓</span>
                  <span>Regulatory compliance</span>
                </div>
                <div className="commitment-point">
                  <span className="point-check">✓</span>
                  <span>Continuous improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Quality
