import attarOne from "../assets/images/1637120768Jannatul_Firdaus_8ml.jpg";
import attarTwo from "../assets/images/1637320355Romance_8ml.jpg";
import attarThree from "../assets/images/1637315153Sidrah_3ml.jpg";

function Attars() {
  return (
    <main className="premium-page">
      <section className="page-banner">
        <p className="luxury-label">Attars</p>
        <h1>Pure, concentrated, honest.</h1>
      </section>

      <div className="shop-grid">
        {[
          {
            name: "Oud Saffron",
            notes: ["Oud", "Saffron", "Amber"],
            price: 2499,
            image: attarOne,
          },
          {
            name: "Rose Velour",
            notes: ["Rose", "Musk", "Violet"],
            price: 1999,
            image: attarTwo,
          },
          {
            name: "Cedar Silk",
            notes: ["Cedar", "White musk", "Patchouli"],
            price: 2199,
            image: attarThree,
          },
        ].map((item) => (
          <article key={item.name} className="shop-card">
            <div className="shop-card-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="shop-card-body">
              <span className="product-tag">ALMAS / ATTAR</span>
              <h2>{item.name}</h2>
              <p>{item.notes.join(" · ")}</p>
              <div className="shop-card-meta">
                <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                <span>12ml</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Attars;
