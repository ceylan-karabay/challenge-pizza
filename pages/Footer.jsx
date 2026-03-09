import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
       
        <div className="footer-col contact-info">
          <img className="footer-logo" src="/footer/logo-footer.svg" alt="Teknolojik Yemekler" />
          <div className="contact-item">
            <img src="/footer/icons/icon/--1.png" alt="" />
            <p>341 Londonderry Road, Istanbul Türkiye</p>
          </div>
          <div className="contact-item">
            <img src="/footer/icons/icon/--2.svg" alt="" />
            <p>aciktim@teknolojikyemekler.com</p>
          </div>
          <div className="contact-item">
            <img src="/footer/icons/icon/--3.svg" alt="" />
            <p>+90 216 123 45 67</p>
          </div>
        </div>

      
        <div className="footer-col menus">
          <h3>Sıcacık Menüler</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-col instagram">
          <h3>Instagram</h3>
          <div className="insta-grid">
            <img src="/footer/insta/li-0.png" alt="" />
            <img src="/footer/insta/li-1.png" alt="" />
            <img src="/footer/insta/li-2.png" alt="" />
            <img src="/footer/insta/li-3.png" alt="" />
            <img src="/footer/insta/li-4.png" alt="" />
            <img src="/footer/insta/li-5.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>© 2023 Teknolojik Yemekler.</p>
          <div className="social-icons">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}