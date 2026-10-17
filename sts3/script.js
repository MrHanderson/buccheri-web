ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".", {
  origin: "top",
});

ScrollReveal().reveal(".men-shoes, .women-shoes, .junior-shoes", {
  origin: "bottom",
});

ScrollReveal().reveal(".", {
  origin: "left",
});

ScrollReveal().reveal(".", {
  origin: "right",
});
