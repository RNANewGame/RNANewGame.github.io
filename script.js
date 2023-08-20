// function toggleMenu() {
//     const homeSection = document.getElementById('home');

//     // Cek apakah section "home" sudah memiliki kelas "blur" atau belum
//     if (homeSection.classList.contains('blur')) {
//       // Jika sudah memiliki, hapus kelas "blur" untuk menghilangkan efek blur
//       homeSection.classList.remove('blur');
//     } else {
//       // Jika belum memiliki, tambahkan kelas "blur" untuk menambahkan efek blur
//       homeSection.classList.add('blur');
//     }
//   }
  
// function toggleMenu() {
//     const homeSection = document.getElementById('home');

//     // Cek apakah section "home" sudah memiliki kelas "blur" atau belum
//     if (homeSection.classList.contains('blur')) {
//       // Jika belum memiliki, tambahkan kelas "blur" untuk menambahkan efek blur
//       homeSection.classList.add('blur');
//     }
//   };


  
// Dapatkan referensi elemen tombol dan menubar
// const button = document.querySelector('.burger');
// const menubar = document.querySelector('.menubar');

// // Fungsi untuk mengaktifkan/ menonaktifkan menubar
// function toggleMenu() {
//   menubar.classList.toggle('open');
// }

// // Tambahkan event listener untuk mengaktifkan fungsi toggleMenu saat tombol diklik
// button.addEventListener('click', toggleMenu);



const navLinks = document.querySelectorAll(".menubar a");

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Hapus class 'active' dari semua elemen 'a' yang ada
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Tambahkan class 'active' ke elemen 'a' yang saat ini diklik
    link.classList.add('active');
  });
});



const observer = new IntersectionObserver((entries) => {
  entries.forEach ((entry)=> {
     console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add("appear");
      }else{
        entry.target.classList.remove("appear");
      }
  });
  
});


const seekElements = document.querySelectorAll(".seek");
seekElements.forEach((el) => observer.observe(el));


