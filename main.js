/* ==================== 
  toggle icon navbar 
====================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* =========================== 
    Scroll Section Active Link 
============================= */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ========================
      Sticky Navbar 
=========================== */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== 
    Menu Icon Navbar 
====================== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* ===================== 
    Scroll Reveal 
====================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form, .portfolio-container",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


/* ===================== 
    Typed Js 
====================== */
const typed = new Typed(".multiple-text", {
  strings: ["Website Development", "Administrator", "AI Development"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Tab switch for skills section
const tabButtons = document.querySelectorAll(".tab-btn");
const skillBoxes = document.querySelectorAll(".skills-grid");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    skillBoxes.forEach((box) => box.classList.remove("active"));

    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

  function showModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('serviceModal').style.display = "block";
  }

  function closeModal() {
    document.getElementById('serviceModal').style.display = "none";
  }

  // Optional: close modal if click outside
  window.onclick = function (event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  
function showProjectModal(title, description, imageArray) {
  document.getElementById("modal-project-title").textContent = title;
  document.getElementById("modal-project-desc").innerHTML = description;


  const gallery = document.getElementById("modal-project-gallery");
  gallery.innerHTML = "";
  imageArray.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = title;
    img.onclick = () => toggleZoom(img);
    gallery.appendChild(img);
  });

  document.getElementById("projectModal").style.display = "block";
}

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
  // Close zoom if any
  document.querySelectorAll(".modal-gallery img.zoomed").forEach(img => img.classList.remove("zoomed"));
}

// Zoom toggle
function toggleZoom(img) {
  // remove zoom from other images
  document.querySelectorAll(".modal-gallery img").forEach(i => {
    if (i !== img) i.classList.remove("zoomed");
  });
  img.classList.toggle("zoomed");
}

// Close zoom when clicking outside the image
window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  const zoomed = document.querySelector(".modal-gallery img.zoomed");
  if (zoomed && !zoomed.contains(e.target) && !e.target.classList.contains("zoomed")) {
    zoomed.classList.remove("zoomed");
  }
});






