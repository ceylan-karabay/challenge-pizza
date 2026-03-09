import axios from 'axios';
import '../pages/SiparisForm.css'
import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const fiyat = 85.50;
const malzemeFiyat = 5.00;
const malzemeler = [
  'Pepperoni', 'Domates', 'Biber', 
  'Sosis', 'Mısır', 'Sucuk', 'Kanada Jambonu', 
  'Ananas', 'Tavuk Izgara', 'Jalepeno', 'Kabak', 
  'Soğan', 'Sarımsak'];

  export default function SiparisForm() {
  const [count, setCount] = useState(1);
  const [boyut, setBoyut] = useState('');
  const [hamur, setHamur] = useState('');
  const [malzemeSecimi, setMalzemeSecimi] = useState([]);
  const [not, setNot] = useState('');

  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toplamMalzemeFiyat = malzemeSecimi.length * malzemeFiyat;
  const toplamFiyat = (fiyat + toplamMalzemeFiyat) * count;

  const toogleMalzeme = (item) => { 
      if (malzemeSecimi.includes(item)) {
       setMalzemeSecimi(malzemeSecimi.filter(m => m !== item));
      } else if (malzemeSecimi.length < 10) {
        setMalzemeSecimi([...malzemeSecimi, item]);
      }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
      if (!isValid) 
      return 
   // alert("Siparişiniz başarıyla alındı!")
   setApiError(null);
   setLoading(true);
    const siparisDetay = { 
      isim:"ceylan",
      boyut,
      hamur,
      malzemeler: malzemeSecimi,
      not: not,
      adet: count,
      toplamFiyat
    }
    try {
      const response = await axios.post(
        'https://reqres.in/api/pizza', siparisDetay,
        {
          headers:{
          "x-api-key": "reqres_5bbcb478f08a4c2b84c818e0b637c5bf"
        }
      }
    )

    console.log('Sipariş detayları:', response.data);

    setBoyut('');
    setHamur('');
    setMalzemeSecimi([]);
    setNot('');
    setCount(1);
    navigate('/success', { state: siparisDetay});

    } catch (error) {
      setApiError('Sipariş gönderilirken hata oluştu:', error);
    } finally {
     setLoading(false);
    }
  };

  useEffect(() => {
    const newError ={}
    if (!boyut) {
      newError.boyut = 'Lütfen bir boyut seçiniz.';
    }
    if (!hamur) {
      newError.hamur = 'Lütfen bir hamur seçiniz.';
    }
    if (malzemeSecimi.length < 4) {
      newError.malzemeler = 'Lütfen en az 4 malzeme seçiniz.';
    }
    if (malzemeSecimi.length > 10) {
      newError.malzemeler = 'En fazla 10 malzeme seçebilirsiniz.';
    }
    setErrors(newError);
    setIsValid(Object.keys(newError).length === 0);
  }, [boyut, hamur, malzemeSecimi]);

  return (
    <div className="siparis-page">
      <header className="siparis-header">
        <h1>Teknolojik Yemekler</h1>
      </header>

      <div className="siparis-container">
        <div className="siparis-banner">
          <nav>Anasayfa - Seçenekler - <span>Sipariş Oluştur</span></nav>
        <h2>Position Absolute Acı Pizza</h2>
        <div className="product-info">
            <span className="price">{fiyat.toFixed(2)}₺</span>
            <div className="rating">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
          <p className="description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
             Hazırlanması 10-15 dakika sürer.
          </p>
        </div>
          </div>
      <main className="main-container">
        <form className="siparis-form" onSubmit={handleSubmit}>
          <div className="selection-row">
            <div className="secim-block">
              <h3>Boyut Seç <span className="required">*</span></h3>
              <div className="size-options">
              {['S', 'M', 'L'].map(size => (
                <label key={size} className={`size-label ${boyut === size ? 'active' : ''}`}>
                  <input type="radio" 
                  name="boyut" 
                  value={size}
                  checked={boyut === size}
                  onChange={(event) => setBoyut(event.target.value)} /> {size}
                </label>
              ))}
              {errors.boyut && <p className="error-text">{errors.boyut}</p>}
            </div>
            </div>
           


            <div className="secim-block">
              <h3>Hamur Seç <span className="required">*</span></h3>
              <select value={hamur} onChange={(event) => setHamur(event.target.value)}>
                <option value="" disabled >Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalın">Kalın</option>
              </select>
              {errors.hamur && <p className="error-text">{errors.hamur}</p>}
            </div>
          </div>

          <div className="malzemeler">
            <h3>Ek Malzemeler</h3>
            <p>En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="malzemeler-grid">
              {malzemeler.map(item => (
                <label key={item} className="malzeme-label">
                  <input 
                  type="checkbox"
                  value={item}
                  checked={malzemeSecimi.includes(item)}
                  onChange={() => toogleMalzeme(item)}
                  /> 
                  <span className='check'></span> {item}
                </label>
              ))}
               {errors.malzemeler && <p className="error-text">{errors.malzemeler}</p>}
            </div>
          <hr />

          <div className="siparis-note">
            <h3>Sipariş Notu</h3>
            <textarea 
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={not}
            onChange={(event) => setNot(event.target.value)}>
            </textarea>
          </div>
          </div>

          <hr className="divider" />

          
          <div className="button-section">
            <div className="counter">
              <button type="button" onClick={() => count > 1 && setCount(count - 1)}>-</button>
              <div className="count-display">{count}</div>
              <button type="button" onClick={() => setCount(count + 1)}>+</button>
            </div>

            <div className="toplam-siparis">
              <h3>Sipariş Toplamı</h3>
              <div className="toplam-secim">
                <span>Seçimler</span>
                <span>{toplamMalzemeFiyat.toFixed(2)}₺</span>
              </div>
              <div className="toplam">
                <span>Toplam</span>
                <span>{toplamFiyat.toFixed(2)}₺</span>
              </div>
              {apiError && <p className="error-text">{apiError}</p>}
              <button 
              className="submit-button"
              type='submit'
              disabled={!isValid || loading}
              style={{opacity: isValid ? 1 : 0.5}}>
                {loading ? 'Gönderiliyor...' : 'SİPARİŞ VER'}
              </button>
            </div>
          </div>
          </form>
         </main>
      <div className="home-container">
       <Footer />
      </div>
    </div>
  
  
   )
}; 