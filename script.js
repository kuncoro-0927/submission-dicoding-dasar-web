const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

function showContent(id, button) {
  // sembunyikan semua section
  document.querySelectorAll(".content").forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");

  // hapus class active dari semua tombol
  document.querySelectorAll(".buttons button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // tambahkan class active ke tombol yang diklik
  button.classList.add("active");
}

const wrapper = document.querySelector(".slide-wrapper");
let slides = Array.from(wrapper.children);
const titleEl = document.getElementById("slider-title");
const descEl = document.getElementById("slider-desc");

function updateActive() {
  slides.forEach((s, i) => {
    s.classList.remove("active");
  });
  slides[0].classList.add("active");

  titleEl.textContent = slides[0].dataset.title;
  descEl.textContent = slides[0].dataset.desc;
}

// Next: geser semua ke kiri, slide pertama ke akhir
// Next: geser semua ke kiri, slide pertama ke akhir
function nextSlide() {
  const first = slides.shift();
  slides.push(first);
  wrapper.appendChild(first);

  wrapper.style.transition = "none";
  wrapper.style.transform = `translateX(216px)`; // geser ke kanan dulu

  // Trigger reflow untuk animasi
  void wrapper.offsetWidth;

  wrapper.style.transition = "transform 0.5s ease";
  wrapper.style.transform = `translateX(0)`; // geser ke posisi normal

  updateActive();
}

// Prev: geser semua ke kanan, slide terakhir ke awal
function prevSlide() {
  const last = slides.pop();
  slides.unshift(last);
  wrapper.insertBefore(last, wrapper.firstChild);

  wrapper.style.transition = "none";
  wrapper.style.transform = `translateX(-216px)`;

  // Trigger reflow untuk animasi
  void wrapper.offsetWidth;

  wrapper.style.transition = "transform 0.5s ease";
  wrapper.style.transform = `translateX(0)`;

  updateActive();
}

// Tombol
document.getElementById("next-btn").addEventListener("click", nextSlide);
document.getElementById("prev-btn").addEventListener("click", prevSlide);

// Inisialisasi
updateActive();
