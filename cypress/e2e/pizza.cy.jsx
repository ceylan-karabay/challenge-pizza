describe('Pizza Sipariş Formu Testleri', () => {
  beforeEach(() => {
    // URL'nin doğruluğundan emin ol (/pizza mı /siparis mi?)
    cy.visit('/siparis'); 
  });

  it('Sipariş notu inputuna metin girilebiliyor mu?', () => {
    const testNotu = 'Zil çalmasın lütfen.';
    cy.get('textarea')
      .type(testNotu)
      .should('have.value', testNotu);
  });

  it('Birden fazla malzeme seçilebiliyor mu?', () => {
    // Malzemeleri metin üzerinden bulup tıkla
    cy.contains('Sosis').click();
    cy.contains('Mısır').click();
    cy.contains('Biber').click();
    cy.contains('Sucuk').click();

    // Seçilenlerin sayısını veya input durumunu kontrol et
    cy.get('input[type="checkbox"]:checked').should('have.length', 4);
  });

  it('Formu başarıyla gönderiyor mu?', () => {
    // Zorunlu alanları doldur
    cy.contains('Orta').click(); // Boyut
    cy.get('select').select('ince'); // Hamur
    
    // Malzemeler (En az 4 adet kuralın için)
    const secimler = ['Sosis', 'Mısır', 'Biber', 'Sucuk'];
    secimler.forEach(m => cy.contains(m).click());

    // Gönder
    cy.get('.submit-button').should('not.be.disabled').click();

    // Başarı sayfasına yönlendi mi?
    cy.url().should('include', '/success');
  });
});