function About() {
  return (
    <main className="premium-page">
      <section className="page-banner">
        <p className="luxury-label">Our story</p>
        <h1>Crafted with heritage, distilled for now.</h1>
      </section>

      <div className="checkout-shell">
        <div className="checkout-form">
          <div className="field-group">
            <h3>House philosophy</h3>
            <p className="detail-copy">
              Almas began with a simple belief: luxury should feel intimate, personal,
              and unforgettable. Every formula is shaped around ingredients with legacy,
              depth, and character, from crimson saffron and cedarwood to warm amber and oud.
            </p>
            <p className="detail-copy">
              We create fine fragrances for modern rituals—pieces that leave a quiet trace,
              an emotional echo, and a signature that feels unmistakably yours.
            </p>
          </div>
        </div>

        <aside className="summary-card">
          <h3>Signature values</h3>
          <div className="summary-line"><span>Rare ingredients</span><strong>Curated</strong></div>
          <div className="summary-line"><span>Artisanal blending</span><strong>Traditional</strong></div>
          <div className="summary-line"><span>Luxury ritual</span><strong>Modern</strong></div>
        </aside>
      </div>
    </main>
  );
}

export default About;
