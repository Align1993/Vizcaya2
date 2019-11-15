$(function() {
  $("body").niceScroll({
    scrollspeed: 40
  });
});

ScrollReveal().reveal(".navbar", {
  duration: 2000,
  origin: "bottom",
  delay: 1000
});

ScrollReveal().reveal(".lead-head", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 300
});
