function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the button
let myButton = document.getElementById("backToTopBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

 myButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}