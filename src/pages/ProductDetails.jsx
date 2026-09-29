import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import { useShop } from "../context/ShopContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart, toggleWishlist, wishlist } = useShop();

  const product = products.find((item) => String(item.id) === id) || products[0];
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);
  const isSaved = wishlist.includes(product.id);

  return (
    <main className="page-shell">
      <div className="container py-5">
        <Link to="/shop" className="text-decoration-none text-secondary small text-uppercase d-inline-flex align-items-center gap-2 mb-4">
          <i className="bi bi-arrow-left" /> Back to collection
        </Link>

        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="detail-gallery p-3 rounded-4 bg-white">
              <img src={product.image} alt={product.name} className="detail-image-main img-fluid" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="detail-copy-box">
              <p className="section-kicker mb-2">{product.category}</p>
              <h1 className="display-5 fw-light mb-3">{product.name}</h1>
              <div className="d-flex align-items-center gap-3 mb-3 text-secondary">
                <span className="detail-rating"><i className="bi bi-star-fill me-1" /> 4.9</span>
                <span>{product.type}</span>
                <span>{product.size}</span>
              </div>
              <div className="price-large mb-3">₹{product.price.toLocaleString("en-IN")}</div>

              <p className="text-secondary mb-4">
                {product.description}
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {product.notes.map((note) => (
                  <span key={note} className="feature-pill">{note}</span>
                ))}
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
                <button type="button" className="btn premium-btn btn-lg" onClick={() => addToCart(product)}>
                  Add to cart
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-dark btn-lg ${isSaved ? "active" : ""}`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <i className={isSaved ? "bi bi-heart-fill me-2" : "bi bi-heart me-2"} />
                  {isSaved ? "Saved" : "Wishlist"}
                </button>
              </div>

              <div className="detail-meta-grid">
                <div>
                  <span>Shipping</span>
                  <strong>Free over ₹2,999</strong>
                </div>
                <div>
                  <span>Availability</span>
                  <strong>In stock</strong>
                </div>
                <div>
                  <span>Delivery</span>
                  <strong>2–4 days</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-5 pt-3">
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4">
            <div>
              <p className="section-kicker">You may also like</p>
              <h2 className="fw-light mb-0">Complete the set</h2>
            </div>
          </div>

          <div className="row g-4">
            {related.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-lg-4">
                <div className="mini-card h-100">
                  <img src={item.image} alt={item.name} className="mini-card-image" />
                  <div className="mini-card-body">
                    <span className="text-gold small text-uppercase">{item.category}</span>
                    <h3>{item.name}</h3>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                      <Link to={`/product/${item.id}`} className="text-dark text-decoration-none small text-uppercase">View</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;
