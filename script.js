window.addEventListener("scroll",()=>{
const section=
document.querySelector('#space');
const position=
section.getBoundingClientRect().top;
const screenHeight=
window.innerHeight;
if(position<screenHeight-100){
section.classList.add("show");
}
});
const faders=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
faders.forEach((section)=>{
const top=section.getBoundingClientRect.top;
const screenHeight=window.innerHeight
if(top<screenHeight-100){
section.classList.add("show");
}
})
})
window.addEventListener("scroll",function(){
const landing=document.getElementById("landing");
const position=landing.getBoundingClientRect().top;
const screenHeight=window.innerHeight;
if(position<screenHeight-100){
landing.classList.add("show");
}
})
window.addEventListener("scroll", function () {
  const landing = document.getElementById("landing");

  const rect = landing.getBoundingClientRect();
  const screenHeight = window.innerHeight;

  
  if (rect.top < screenHeight - 100) {
    landing.classList.add("show");
  }

  
  const scrollY = window.scrollY;

  landing.style.backgroundPosition = `center ${scrollY * 0.3}px`;
});
const explore = document.getElementById("explore");

window.addEventListener("scroll", function () {
  const rect = explore.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    explore.classList.add("show");
  }
});
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    alert("More details coming soon 🚀");
  });
});
const cards2 = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards2.forEach((card, index) => {
    const rect = card.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200); 
    }
  });
});