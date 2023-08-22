var random = new Array();

random[0] = "mailto:contact@hamzat.xyz";
random[1] = "https://www.instagram.com/hamzat.auction/";

function randomlink() {
  window.location = random[Math.floor(Math.random()*random.length)];
  }
