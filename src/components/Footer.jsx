import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Footer.css";

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Attars", to: "/attars" },
  { label: "About", to: "/about" },
];

const categoryLinks = [
  { label: "Perfume", to: "/shop" },
  { label: "Attar", to: "/attars" },
  { label: "Deo", to: "/shop" },
  { label: "Gift Sets", to: "/shop" },
];

const supportLinks = [
  { label: "Shipping", to: "/checkout" },
  { label: "Returns", to: "/checkout" },
  { label: "Contact", to: "/about" },
  { label: "Journal", to: "/journal/featured" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="g-4 gy-5 align-items-start">
          <Col lg={4} md={6} xs={12}>
            <div className="footer-brand-block">
              <img src={logo} alt="Almas Perfume" className="footer-logo" />
              <p className="footer-tagline">
                Fragrances crafted to linger beautifully — from warm woods and
                soft florals to treasured attars and daily essentials.
              </p>
              <div className="social-links" aria-label="Social media links">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram" style={{ color: '#ff008c' }} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook" style={{ color: '#2800bb' }} />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
                  <i className="bi bi-pinterest" style={{ color: '#f50000' }} />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={2} md={3} xs={6}>
            <div className="footer-column">
              <h3 className="footer-title">Explore</h3>
              <ul className="footer-links">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={2} md={3} xs={6}>
            <div className="footer-column">
              <h3 className="footer-title">Collections</h3>
              <ul className="footer-links">
                {categoryLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={4} md={12} xs={12}>
            <div className="footer-column contact-column">
              <h3 className="footer-title">Visit or contact</h3>
              <ul className="footer-contact">
                <li>
                  <i className="bi bi-geo-alt" />
                  <span>12 Grand Avenue, Mumbai, India</span>
                </li>
                <li>
                  <i className="bi bi-envelope" />
                  <a href="mailto:hello@almasperfume.com">hello@almasperfume.com</a>
                </li>
                <li>
                  <i className="bi bi-telephone" />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>© 2026 Almas Perfume. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/about">Privacy</Link>
            <Link to="/checkout">Terms</Link>
            <Link to="/about">Shipping & Returns</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
