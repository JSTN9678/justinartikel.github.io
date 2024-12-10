// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default link

    const target = document.querySelector(this.getAttribute("href")); // Elemen target berdasarkan href
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Efek transisi smooth
        block: "start", // Scroll sampai bagian awal elemen
      });

      // Tambahkan efek klik ke menu (opsional)
      document
        .querySelectorAll("nav a")
        .forEach((link) => link.classList.remove("clicked"));
      this.classList.add("clicked");
    }
  });
});

// Highlight Active Section in Navigation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section"); // Ambil semua elemen section
  const navLinks = document.querySelectorAll("nav a"); // Ambil semua link navigasi

  let current = ""; // Variabel untuk menyimpan id section yang terlihat

  // Loop untuk mengecek posisi setiap section
  sections.forEach((section) => {
    const sectionTop = section.offsetTop; // Posisi awal section dari atas
    const sectionHeight = section.clientHeight; // Tinggi section

    // Logika untuk menentukan section aktif
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id"); // Ambil id section aktif
    }
  });

  // Update kelas 'active' pada navigasi
  navLinks.forEach((link) => {
    link.classList.remove("active"); // Hapus semua kelas 'active'
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active"); // Tambahkan kelas 'active' pada link yang sesuai
    }
  });
});

// Optional: Menu Hamburger (Mobile View)
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open"); // Toggle kelas 'open' pada menu navigasi
  });
}

// Scroll Animation
const scrollElements = document.querySelectorAll(".scroll-effect"); // Semua elemen dengan kelas scroll-effect

// Fungsi untuk mengecek apakah elemen masuk viewport
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0
  );
};

// Fungsi untuk menambahkan kelas "visible" saat elemen masuk viewport
const scrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible"); // Jika ingin animasi hilang saat keluar viewport
    }
  });
};

// Debugging: Log elemen yang masuk viewport
const debugScroll = () => {
  console.clear(); // Bersihkan console setiap kali scroll
  scrollElements.forEach((el) => {
    console.log(`${el.className} => In Viewport: ${isInViewport(el)}`); // Tampilkan elemen dan statusnya
  });
};

// Jalankan fungsi saat halaman di-scroll atau di-load
window.addEventListener("scroll", () => {
  scrollAnimation();
  debugScroll(); // Debugging
});
window.addEventListener("load", scrollAnimation);

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menuList.classList.toggle("show");
  console.log(menuList.classList); // Debugging: Cek apakah kelas 'show' berhasil ditambahkan
});

let lastScrollTop = 0; // Variabel untuk menyimpan posisi scroll sebelumnya
const header = document.querySelector("header"); // Menyimpan elemen header

// Event listener untuk mendeteksi scroll
window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Posisi scroll saat ini

  if (currentScroll > lastScrollTop) {
    // Jika scroll ke bawah
    header.classList.add("hide"); // Menyembunyikan navbar
  } else {
    // Jika scroll ke atas
    header.classList.remove("hide"); // Menampilkan navbar
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pastikan scroll tidak negatif
});
