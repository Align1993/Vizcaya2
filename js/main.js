
ScrollReveal().reveal(".navbar", {
  duration: 3000,
  origin: "bottom",
});

ScrollReveal().reveal(".lead-head", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 300
});

ScrollReveal().reveal(".design", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 300
});

ScrollReveal().reveal(".lead-p", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 400
});

ScrollReveal().reveal(".sub-heading", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 400
});

ScrollReveal().reveal(".design-head", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 400
});

ScrollReveal().reveal(".design-head2", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 400
});


ScrollReveal().reveal(".design-head3", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 400
});

ScrollReveal().reveal(".ione", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 1000
});

ScrollReveal().reveal(".video", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 1000
});

ScrollReveal().reveal(".video1", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 1000
});

ScrollReveal().reveal(".job1", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 300
});

ScrollReveal().reveal(".job2", {
  duration: 3000,
  origin: "bottom",
  distance: "5rem",
  delay: 400
});

ScrollReveal().reveal(".job3", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 500
});

ScrollReveal().reveal(".l1", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 200
});

ScrollReveal().reveal(".l2", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 250
});

ScrollReveal().reveal(".l3", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 300
});

ScrollReveal().reveal(".l4", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 350
});

ScrollReveal().reveal(".l5", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 400
});

ScrollReveal().reveal(".l6", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 200
});

ScrollReveal().reveal(".l7", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 250
});

ScrollReveal().reveal(".l8", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 300
});

ScrollReveal().reveal(".l9", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 350
});

ScrollReveal().reveal(".l10", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 400
});

ScrollReveal().reveal(".l11", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 450
});

ScrollReveal().reveal(".l12", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 500
});

ScrollReveal().reveal(".l13", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 500
});

ScrollReveal().reveal(".mini-foot", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 1000
});


ScrollReveal().reveal(".f1", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 500
});


ScrollReveal().reveal(".f2", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 600
});

ScrollReveal().reveal(".f3", {
  duration: 3500,
  origin: "bottom",
  distance: "5rem",
  delay: 650
});






// WORK SCRIPTS

var $cursor = $(".cursor"),
  $overlay = $(".project-overlay");
function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY
    },
    delay: 0.03
  });
}
$(".p-1").hover(function () {
  $(".cursor").css({ "background-image": "url(../../../img/image-1.jpg)" });
});
$(".p-2").hover(function () {
  $(".cursor").css({ "background-image": "url(../../../img/image-2.jpg)" });
});
$(".p-3").hover(function () {
  $(".cursor").css({ "background-image": "url(../../../img/image-3.jpg)" });
});
$(".p-4").hover(function () {
  $(".cursor").css({ "background-image": "url(../../../img/image-4.jpg)" });
});
var flag = false;
$($overlay).mousemove(function () {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});
$($overlay).mouseout(function () {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});





