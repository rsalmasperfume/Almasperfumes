import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import logo from "../assets/almas-wbg-logo.jpg";
import { ShoppingBag, Heart } from "lucide-react";
import Testimonial from "../components/Testimonial";


const categories = [
  { name: "Perfume", image: products[0].image, hoverImage: products[0].hoverImage, text: "Signature scent stories" },
  { name: "Attar", image: products[1].image, hoverImage: products[1].hoverImage, text: "Concentrated luxury" },
  { name: "Deo", image: products[5].image, hoverImage: products[5].hoverImage, text: "Daily freshness" },
  { name: "Gift Sets", image: products[4].image, hoverImage: products[4].hoverImage, text: "Elegant gifting" },
];

const heroSlides = [
  {
    image: new URL("../assets/banner/2.jpg", import.meta.url).href,
    kicker: "The Al-mas signature",
    title: "Leave a beautiful trace.",
    copy: "Rare woods, luminous florals, and timeless oils composed for the moments people remember.",
    action: "Explore fragrances",
  },
  {
    image: new URL("../assets/banner/4.jpg", import.meta.url).href,
    kicker: "A ritual of refinement",
    title: "Wear your mood.",
    copy: "From quiet mornings to unforgettable evenings, find the scent that speaks before you do.",
    action: "Find your scent",
  },
  {
    image: new URL("../assets/banner/7.jpg", import.meta.url).href,
    kicker: "The art of attar",
    title: "Pure. Personal. Yours.",
    copy: "Discover concentrated fragrance oils made to settle into the skin and become part of your story.",
    action: "Shop attars",
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const slide = heroSlides[activeSlide];

  const showSlide = (slideIndex) => {
    setActiveSlide((slideIndex + heroSlides.length) % heroSlides.length);
  };

  const featured = products.slice(0, 8);

  return (
    <main className="home-page">

      {/* hero slider section */}

      <section
        className="hero-slider position-relative overflow-hidden text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Featured Al-mas fragrances"
      >
        <div
          className="hero-slide-image"
          style={{ backgroundImage: `url(${slide.image})` }}
          key={slide.image}
        />
        <div className="hero-slide-overlay" />

        {/* <div className="container position-relative hero-slider-content">
          <div className="hero-brand-lockup">
            <img src={logo} alt="Al-mas perfumes" />
          </div>
          <div className="hero-copy hero-copy-enter" key={slide.title}>
            <p className="section-kicker text-uppercase mb-3">{slide.kicker}</p>
            <h1 className="display-1 fw-light mb-3">{slide.title}</h1>
            <p className="lead mb-4 text-white-50" style={{ maxWidth: 560 }}>{slide.copy}</p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/shop" className="btn premium-btn btn-lg">{slide.action}</Link>
              <Link to="/about" className="btn btn-outline-light btn-lg">Our story</Link>
            </div>
          </div>
        </div> */}

        <div className="hero-slider-controls container">
          <button type="button" className="hero-arrow" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous slide">
            <i className="bi bi-arrow-left" />
          </button>
          <div className="hero-dots" role="tablist" aria-label="Choose a featured fragrance">
            {heroSlides.map((heroSlide, slideIndex) => (
              <button
                type="button"
                role="tab"
                key={heroSlide.title}
                className={`hero-dot ${slideIndex === activeSlide ? "active" : ""}`}
                onClick={() => showSlide(slideIndex)}
                aria-label={`Show slide ${slideIndex + 1}`}
                aria-selected={slideIndex === activeSlide}
              />
            ))}
          </div>
          <button type="button" className="hero-arrow" onClick={() => showSlide(activeSlide + 1)} aria-label="Next slide">
            <i className="bi bi-arrow-right" />
          </button>
        </div>
      </section>


      {/* shop by category section */}

      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
          <div>
            <p className="section-kicker mb-2">Shop by category</p>
            <h2 className="display-6 fw-light mb-0">Curated essentials</h2>
          </div>
          <Link to="/shop" className="text-decoration-none text-dark small text-uppercase">View all products</Link>
        </div>

        <div
  className="row g-3"
  style={{ maxWidth: 1200, margin: "0 auto" }}
>
  {categories.map((category) => (
    <div key={category.name} className="col-12 col-md-6 col-xl-3">
      <div className="category-item">
        
        <div className="category-image">
          <img
            src={category.image}
            alt={category.name}
          />
        </div>

        <img
              src={category.hoverImage || category.image}
              alt={`${category.name} alternate view`}
              className="product-hover-image"
            />

        <div className="category-content">
          <span>{category.name}</span>
          <h3>{category.text}</h3>
        </div>

        <div className="category-arrow">
          →
        </div>

      </div>
    </div>
  ))}
</div>
      </section>


      {/* featured products section */}


      <section className="container py-5">
        <div className="feature-banner d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <p className="section-kicker mb-2">Featured collection</p>
            <h2 className="display-6 fw-light mb-0">Best sellers</h2>
          </div>
          <Link to="/shop" className="btn premium-btn">Explore collection</Link>
        </div>

       <div className="row g-4">
  {featured.map((product) => (
    <div key={product.id} className="col-12 col-md-6 col-xl-3">
      <div className="royal-product-card" style={{ height:"250px"}}>

        {/* IMAGE AREA */}
        <div className="royal-product-image">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
            />
          </Link>

          {/* Hover Image */}
            <img
              src={product.hoverImage || product.image}
              alt={`${product.name} alternate view`}
              className="product-hover-image"
            />

          {/* Hover Overlay */}
          <div className="royal-product-overlay">

            {/* Top Actions */}
            <div className="royal-actions">

  <button
    className="royal-icon-btn"
    aria-label="Add to wishlist"
  >
    <Heart size={18} strokeWidth={1.5} />
  </button>

  <button
    className="royal-icon-btn"
    aria-label="Add to cart"
  >
    <ShoppingBag size={18} strokeWidth={1.5} />
  </button>

</div>

            {/* Bottom Price */}
            <div className="royal-price">
              ₹{product.price.toLocaleString("en-IN")}
            </div>

          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="royal-product-info" style={{ height:"50px"}}>

          <span className="royal-product-category" style={{ fontSize: "0.8rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em",textAlign: "start", display: "block", marginBottom: "0.25rem" }}>
            {product.category}
          </span>

          <Link
            to={`/product/${product.id}`}
            className="royal-product-name"
          style={{ fontSize: "1rem", fontWeight: "500", color: "#333" }}>
            {product.name}
          </Link>

        </div>

      </div>
    </div>
  ))}
</div>
      </section>

      <section className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="story-card position-relative overflow-hidden h-100">
              <img src={products[3].image} alt="Luxury fragrance ritual" className="img-fluid h-100 w-100" />
            </div>
          </div>
          <div className="col-lg-6">
            <p className="section-kicker mb-3">Why we stand apart</p>
            <h2 className="display-6 fw-light mb-4">Crafted for a refined everyday ritual.</h2>
            <div className="benefit-list">
              <div>
                <span className="benefit-icon"><i className="bi bi-check2" /></span>
                <div>
                  <h4>Rare ingredients</h4>
                  <p>Curated blends using woods, resins, florals, and warm amber accords.</p>
                </div>
              </div>
              <div>
                <span className="benefit-icon"><i className="bi bi-check2" /></span>
                <div>
                  <h4>Premium craftsmanship</h4>
                  <p>Every scent is composed for depth, character, and premium staying power.</p>
                </div>
              </div>
              <div>
                <span className="benefit-icon"><i className="bi bi-check2" /></span>
                <div>
                  <h4>Luxury delivery</h4>
                  <p>Complimentary wrapping and fast nationwide delivery for every order.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="container py-5 pb-6">
        <div className="newsletter-box text-center">
          <p className="section-kicker mb-2">Stay in the loop</p>
          <h2 className="display-6 fw-light mb-3">Receive private offers and fresh launches.</h2>
          <div className="newsletter-form-wrap mx-auto">
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button type="button" className="btn premium-btn">Join now</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
