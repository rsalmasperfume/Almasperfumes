import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import { useShop } from "../context/ShopContext";
import "./MyNavbar.css";

function MyNavbar() {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useShop();
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);

  const [menOpen, setMenOpen] = useState(false);
  const [womenOpen, setWomenOpen] = useState(false);
  const [giftsOpen, setGiftsOpen] = useState(false);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="main-navbar"
    >
      <Container fluid className="navbar-container">

        {/* ==================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler-custom"
        >
          <i className="bi bi-list"></i>
        </Navbar.Toggle>


        {/* ==================================================
            LOGO
        ================================================== */}

        <Navbar.Brand
          href="/"
          className="navbar-brand"
        >
          <img
            src={logo}
            alt="Almas Perfume"
            className="navbar-logo"
          />
        </Navbar.Brand>


        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <Navbar.Offcanvas
          id="responsive-navbar-nav"
          aria-labelledby="responsive-navbar-title"
          placement="start"
          responsive="lg"
          className="nav-offcanvas"
        >

          {/* OFFCANVAS HEADER */}

          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="responsive-navbar-title">

              <img
                src={logo}
                alt="Almas Perfume"
                className="offcanvas-logo"
              />

            </Offcanvas.Title>
          </Offcanvas.Header>


          {/* OFFCANVAS BODY */}

          <Offcanvas.Body>

            <Nav className="main-nav">

              {/* ==================================================
                  HOME
              ================================================== */}

              <Nav.Link
                href="/"
                className="nav-main-link"
              >
                Home
              </Nav.Link>


              {/* ==================================================
                  SHOP
              ================================================== */}

              <div
                className={`custom-dropdown ${
                  shopOpen ? "dropdown-open" : ""
                }`}
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => {
                  setShopOpen(false);
                  setMenOpen(false);
                  setWomenOpen(false);
                  setGiftsOpen(false);
                }}
              >

                <button
                  type="button"
                  className="nav-main-link dropdown-trigger"
                  onClick={() => setShopOpen(!shopOpen)}
                >

                  <span>Shop</span>

                  <i className="bi bi-chevron-down"></i>

                </button>


                {/* SHOP MENU */}

                <div className="custom-dropdown-menu">

                  {/* MEN */}

                  <div
                    className={`nested-dropdown ${
                      menOpen ? "nested-open" : ""
                    }`}
                    onMouseEnter={() => setMenOpen(true)}
                    onMouseLeave={() => setMenOpen(false)}
                  >

                    <button
                      type="button"
                      className="nested-dropdown-trigger"
                      onClick={() => setMenOpen(!menOpen)}
                    >

                      <span>Men's</span>

                      <i className="bi bi-chevron-right"></i>

                    </button>


                    <div className="nested-dropdown-menu">

                      <Nav.Link href="/shop/men/oud">
                        Oud
                      </Nav.Link>

                      <Nav.Link href="/shop/men/musk">
                        Musk
                      </Nav.Link>

                      <Nav.Link href="/shop/men/mukhallat">
                        Mukhallat
                      </Nav.Link>

                    </div>

                  </div>


                  {/* WOMEN */}

                  <div
                    className={`nested-dropdown ${
                      womenOpen ? "nested-open" : ""
                    }`}
                    onMouseEnter={() => setWomenOpen(true)}
                    onMouseLeave={() => setWomenOpen(false)}
                  >

                    <button
                      type="button"
                      className="nested-dropdown-trigger"
                      onClick={() =>
                        setWomenOpen(!womenOpen)
                      }
                    >

                      <span>Women's</span>

                      <i className="bi bi-chevron-right"></i>

                    </button>


                    <div className="nested-dropdown-menu">

                      <Nav.Link href="/shop/women/cool-water">
                        Cool Water
                      </Nav.Link>

                      <Nav.Link href="/shop/women/blueberry">
                        Blueberry
                      </Nav.Link>

                    </div>

                  </div>


                  {/* GIFTS */}

                  <div
                    className={`nested-dropdown ${
                      giftsOpen ? "nested-open" : ""
                    }`}
                    onMouseEnter={() => setGiftsOpen(true)}
                    onMouseLeave={() => setGiftsOpen(false)}
                  >

                    <button
                      type="button"
                      className="nested-dropdown-trigger"
                      onClick={() =>
                        setGiftsOpen(!giftsOpen)
                      }
                    >

                      <span>Gifts</span>

                      <i className="bi bi-chevron-right"></i>

                    </button>


                    <div className="nested-dropdown-menu">

                      <Nav.Link href="/gifts/sets">
                        Gift Sets
                      </Nav.Link>

                      <Nav.Link href="/gifts/individual">
                        Individual Gifts
                      </Nav.Link>

                    </div>

                  </div>

                </div>

              </div>


              {/* ==================================================
                  COLLECTION
              ================================================== */}

              <div
                className={`custom-dropdown ${
                  collectionOpen ? "dropdown-open" : ""
                }`}
                onMouseEnter={() =>
                  setCollectionOpen(true)
                }
                onMouseLeave={() =>
                  setCollectionOpen(false)
                }
              >

                <button
                  type="button"
                  className="nav-main-link dropdown-trigger"
                  onClick={() =>
                    setCollectionOpen(!collectionOpen)
                  }
                >

                  <span>Collection</span>

                  <i className="bi bi-chevron-down"></i>

                </button>


                <div className="custom-dropdown-menu collection-menu">

                  <Nav.Link href="/collection/new-arrivals">
                    New Arrivals
                  </Nav.Link>

                  <Nav.Link href="/collection/best-sellers">
                    Best Sellers
                  </Nav.Link>

                  <Nav.Link href="/collection/sale">
                    Sale
                  </Nav.Link>

                </div>

              </div>

            </Nav>

          </Offcanvas.Body>

        </Navbar.Offcanvas>


        {/* ==================================================
            RIGHT SIDE
        ================================================== */}

        <div className="navbar-tools">

          {/* SEARCH */}

          <div
            className={`nav-search ${
              searchOpen ? "is-open" : ""
            }`}
          >

            {searchOpen && (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  navigate("/shop");
                  setSearchOpen(false);
                }}
              >
                <input
                  type="search"
                  placeholder="Search products..."
                  autoFocus
                  className="search-input"
                  aria-label="Search products"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </form>
            )}

            <button
              type="button"
              className="search-toggle"
              aria-label={
                searchOpen
                  ? "Close search"
                  : "Open search"
              }
              onClick={() =>
                setSearchOpen((open) => !open)
              }
            >

              <i
                className={
                  searchOpen
                    ? "bi bi-x-lg"
                    : "bi bi-search"
                }
              ></i>

            </button>

          </div>


          {/* ACTION ICONS */}

          <Nav className="action-link">

            {/* CART */}

            <Nav.Link
              href="/cart"
              className="action-icon"
              aria-label="Shopping cart"
            >
              <i className="bi bi-bag-check"></i>
            </Nav.Link>


            {/* WISHLIST */}

            <Nav.Link
              href="/wishlist"
              className="action-icon"
              aria-label="Wishlist"
            >
              <i className="bi bi-heart"></i>
            </Nav.Link>


            {/* ACCOUNT */}

            <Nav.Link
              href="/login"
              className="action-icon"
              aria-label="Account"
            >
              <i className="bi bi-person"></i>
            </Nav.Link>

          </Nav>

        </div>

      </Container>
    </Navbar>
  );
}

export default MyNavbar;
