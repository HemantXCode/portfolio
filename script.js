document.addEventListener("DOMContentLoaded", () => {

  /*
   * Project card scroll animation
   */

  const cards = document.querySelectorAll(".project-card.animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.2
    }
  );


  cards.forEach((card) => {
    observer.observe(card);
  });


  /*
   * Feather icons
   */

  if (typeof feather !== "undefined") {
    feather.replace();
  }

});