  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi. Teşekkür ederiz!");
    this.reset();
  });
  
  document.getElementById("teklifForm").addEventListener("submit", function (e) {
    e.preventDefault(); // sayfanın yenilenmesini önler
    alert("Form başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
    this.reset(); // formu temizle
  });
  
