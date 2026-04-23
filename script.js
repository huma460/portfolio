from IPython.display import HTML

html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>

    <!-- CSS -->
    <link rel="stylesheet" href="style.css">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

    <!-- OPTIONAL DARK MODE STYLE (moved from JS) -->
    <style>
      .dark-mode {
        background-color: #0d1117;
        color: #c9d1d9;
      }
      .dark-mode header,
      .dark-mode footer {
        background: #161b22;
      }
    </style>
</head>
<body>

    <!-- Header -->
    <header>
        <nav class="navbar">
            <h1 class="logo">MyPortfolio</h1>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <h2>Hello, I'm <span>Your Name</span></h2>
        <p>A passionate Web Developer</p>
        <button onclick="scrollToSection('projects')">View My Work</button>
    </section>

    <!-- About -->
    <section id="about" class="section">
        <h2>About Me</h2>
        <p>
            I am a beginner developer learning HTML, CSS, JavaScript, and Python.
            I enjoy building modern and responsive websites.
        </p>
    </section>

    <!-- Projects -->
    <section id="projects" class="section">
        <h2>Projects</h2>

        <div class="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website to showcase my work.</p>
        </div>

        <div class="project-card">
            <h3>Todo App</h3>
            <p>A simple JavaScript app to manage daily tasks.</p>
        </div>

    </section>

    <!-- Contact -->
    <section id="contact" class="section">
        <h2>Contact Me</h2>
        <p>Email: your@email.com</p>
    </section>

    <!-- Footer -->
    <footer>
        <p>© 2026 My Portfolio</p>
    </footer>

    <!-- JS -->
    <script>
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
    </script>

</body>
</html>
"""

HTML(html_content)
