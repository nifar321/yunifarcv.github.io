// document.addEventListener('DOMContentLoaded', function () {
//   // Inisialisasi EmailJS dengan User ID Anda
//   emailjs.init('hIF4n2hhz6X44OAEr');

//   // Dapatkan elemen form
//   const form = document.querySelector('[data-form]');

//   // Tambahkan event listener untuk submit form
//   form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Kirim email menggunakan template yang telah dibuat
//     emailjs.sendForm('service_73cqk57', 'template_lb2wduq', form)
//       .then(function () {
//         alert('Pesan terkirim!');
//       }, function (error) {
//         alert('Terjadi kesalahan: ' + error);
//       });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('[data-form]');
  form.addEventListener('submit', sendEmail);
});

function sendEmail(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;

  // Ganti 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', dan 'YOUR_USER_ID' dengan nilai yang sesuai dari akun EmailJS Anda
  emailjs.send('service_73cqk57', 'template_lb2wduq', {
    fullname: name,
    email: email,
    message: message
  })
  .then(function(response) {
    console.log('Email berhasil dikirim', response);
    form.reset();
  }, function(error) {
    console.log('Gagal mengirim email', error);
  });
}