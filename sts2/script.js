ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".", {
  origin: "top",
});

ScrollReveal().reveal(".shoes-image", {
  origin: "bottom",
});

ScrollReveal().reveal(".logo-image, .image-two", {
  origin: "left",
});

ScrollReveal().reveal(".brand-text, .image-one, .image-three", {
  origin: "right",
});
