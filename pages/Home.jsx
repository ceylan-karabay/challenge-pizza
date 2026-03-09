import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <img src="/iteration-1-images/logo.svg" alt="logo" className="main-logo" />
          <p className="home-tagline">fırsatı kaçırma</p>
          <h1 className="home-title">KOD ACIKTIRIR<br />PİZZA, DOYURUR</h1>
          <button className="home-button" onClick={() => navigate('/siparis')}>
            ACIKTIM
          </button>
        </div>
      </section>


      <nav className="category-nav">
        <button><img src="/icons/1.svg" alt="" /> YENİ! Kore</button>
        <button className="active"><img src="/icons/2.svg" alt="" /> Pizza</button>
        <button><img src="/icons/3.svg" alt="" /> Burger</button>
        <button><img src="/icons/4.svg" alt="" /> Kızartmalar</button>
        <button><img src="/icons/5.svg" alt="" /> Fast Food</button>
        <button><img src="/icons/6.svg" alt="" /> Gazlı İçecek</button>
      </nav>

      <section className="promo-section">
        <div className="promo-grid">
          <div className="promo-card large-card burger-promo">
            <h2>Özel <br /> Lezzetus</h2>
            <p>Position: Absolute Acı Burger</p>
            <button onClick={() => navigate('/siparis')}>SİPARİŞ VER</button>
          </div>
          <div className="promo-right-column">
            <div className="promo-card small-card menu-promo">
              <h3>Hackathlon <br /> Burger Menü</h3>
              <button onClick={() => navigate('/siparis')}>SİPARİŞ VER</button>
            </div>
            <div className="promo-card small-card fast-promo">
              <h3><span>Çoooook</span> hızlı <br /> npm gibi kurye</h3>
              <button onClick={() => navigate('/siparis')}>SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-intro">
        <p className="red-text">en çok paketlenen menüler</p>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
      </section>


      <section className="product-grid">
        <div className="product-card">
          <img src="pictures/food-1.png" alt="Terminal Pizza" />
          <h4>Terminal Pizza</h4>
          <div className="product-info">
            <span>4.9</span>
            <span>(200)</span>
            <span className="product-price">60₺</span>
          </div>
        </div>
        <div className="product-card">
          <img src="pictures/food-2.png" alt="Position Absolute" />
          <h4>Position Absolute Acı Pizza</h4>
          <div className="product-info">
            <span>4.9</span>
            <span>(928)</span>
            <span className="product-price">85₺</span>
          </div>
        </div>
        <div className="product-card">
          <img src="pictures/food-3.png" alt="useEffect Burger" />
          <h4>useEffect Tavuklu Burger</h4>
          <div className="product-info">
            <span>4.8</span>
            <span>(462)</span>
            <span className="product-price">75₺</span>
          </div>
        </div>
      </section>
      <div className="home-container">
    <Footer />
  </div>
    </div>
  );
}