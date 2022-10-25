// var splide = new Splide(".splide", {
//   type: "loop",
//   padding: "5rem",
// });

// splide.mount();

const splide = new Splide(".splide", {
  perPage: 1,
  padding: "5rem",
  focus: "center",
  rewind: true,
  perMove: 1,
  type: "loop",
  gap: "3rem",
  drag: "free",
  fixedWidth: 540,
  fixedHeight: 360,
  breakpoints: {
    767: { perPage: 1, gap: "1.5rem", fixedWidth: 270, fixedHeight: 180 },
  },
});

splide.mount();
