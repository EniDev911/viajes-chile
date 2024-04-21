// scroll 
window.addEventListener("scroll", () => {
  const nav = document.getElementById('nav');
  (window.scrollY > 40)
    ? nav.style.background = "#000"
    : nav.style.background = "transparent"
})
