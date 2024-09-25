import React from "react";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <ul>
            <li><a href="#women">WOMEN</a></li>
            <li><a href="#men">MEN</a></li>
            <li><a href="#about-us">ABOUT US</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>

          {/* Logo Section */}
          <div className="logo">
            <img src="/sharpthread_logo.jpg" alt="Logo" className="logo-image" />
          </div>

          {/* Header Right Section */}
          <div className="header-right">
            <a href="#search">🔍</a>
            <a href="#login">LOG IN</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Discover Your Style with SharpThreads Today!</h1>
          <button>Shop Collection</button>
        </div>
        <div className="hero-image">
          <img src="/img1.png" alt="Hero" />
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="best-sellers">
        <h2>BEST SELLERS</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/white_tshirt.png" alt="Men's T-shirt" />
            <h3>MEN</h3>
            <p>T-shirt name</p>
          </div>
          <div className="product-card">
            <img src="/blue_tshirt.png" alt="Men's T-shirt" />
            <h3>MEN</h3>
            <p>T-shirt name</p>
          </div>
          <div className="product-card">
            <img src="/women1.jpg" alt="Women's T-shirt" />
            <h3>WOMEN</h3>
            <p>T-shirt name</p>
          </div>
          <div className="product-card">
            <img src="/women2.png" alt="Women's T-shirt" />
            <h3>WOMEN</h3>
            <p>T-shirt name</p>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections">
        <div className="collection">
          <h3>Men</h3>
          <p>The base collection - Ideal every day</p>
          <button>Shop Now</button>
        </div>
        <div className="collection">
          <h3>Women</h3>
          <p>
            Winter Collection<br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button>Shop Collection</button>
        </div>
      </section>
    </div>
  );
}

export default App;
