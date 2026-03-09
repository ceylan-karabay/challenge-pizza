import '../pages/SiparisOnay.css'
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from './Footer';
export default function SiparisOnay() {

  const navigate = useNavigate();
  const location = useLocation()
  const siparis = location.state;

 if (!siparis) {
    return (
      <div className="success-page">
        <button onClick={() => navigate("/")}>Sipariş Bulunamadı - Ana Sayfaya Dön</button>
      </div>
    );
  }


  return (
    <div className="success-page">
      <header className="success-header">
        <h1>Teknolojik Yemekler</h1>
      </header>

      <div className="success-content">
        <p className="lezzet-yolda">lezzetin yolda</p>
        <h2 className="siparis-alindi">SİPARİŞ ALINDI</h2>
        
        <hr className="success-divider" />

        <div className="siparis-detay-container">
          <h3 className="pizza-name">Position Absolute Acı Pizza</h3>
          
          <div className="siparis-detay">
            <p>Boyut: <strong>{siparis.boyut}</strong></p>
            <p>Hamur: <strong>{siparis.hamur}</strong></p>
            <p>Ek Malzemeler: <strong>{siparis.malzemeler?.join(', ')}</strong></p>
          </div>

          <div className="toplam-siparis-card">
            <h4>Sipariş Toplamı</h4>
            <div className="toplam-secim">
              <span>Seçimler</span>
              <span>{siparis.secimlerFiyati?.toFixed(2)}₺</span>
            </div>
            <div className="toplam-secim">
              <span>Toplam</span>
              <span>{siparis.toplamFiyat?.toFixed(2)}₺</span>
            </div>
          </div>
        </div>

        <button className="home-btn" onClick={() => navigate("/")}>
          Ana Sayfaya Dön
        </button>
      </div>
       <div className="home-container">
    <Footer />
  </div>
    </div>
  );
}