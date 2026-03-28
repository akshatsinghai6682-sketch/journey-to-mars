const sections = document.querySelectorAll("section");
const cards = document.querySelectorAll(".card");

function handleScroll() {

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 120);
    }
  });

  const landing = document.getElementById("landing");
  if (landing) {
    const scrollY = window.scrollY;
    landing.style.backgroundPosition = `center ${scrollY * 0.3}px`;
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // 🔥 important

document.querySelector("#hero").classList.add("show");

cards.forEach(card => {
  card.addEventListener("click", () => {
    alert("More details coming soon");
  });
});

window.addEventListener("load", () => {
  document.getElementById("hero").classList.add("show");
});

const glow = document.querySelector(".mouse-glow");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}
window.goTo = function(selector) {
  const el = document.querySelector(selector);

  if (!el) return;
el.scrollIntoView({
behavior:"smooth",
block:"start"
});
};

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  document.getElementById("progress").style.width =
    (scroll / height) * 100 + "%";
});
document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("launch").scrollIntoView({
    behavior: "smooth"
  });
});

