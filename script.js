/* =========================
   MENU TOGGLE (for mobile)
========================= */
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =========================
   SIMPLE FORM VALIDATION
========================= */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ccc";
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Please fill in all fields.");
    }
  });
}

/* =========================
   SCROLL TO TOP BUTTON
========================= */
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.display = "none";
scrollBtn.style.cursor = "pointer";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* =========================
   DARK MODE TOGGLE
========================= */
const darkBtn = document.createElement("button");
darkBtn.innerText = "🌙";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.left = "20px";
darkBtn.style.padding = "10px";
darkBtn.style.cursor = "pointer";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/* =========================
   OPTIONAL DARK MODE STYLE
========================= */
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: #0d1117;
    color: #c9d1d9;
  }
  .dark-mode header,
  .dark-mode footer {
    background: #161b22;
  }
`;
document.head.appendChild(style);
