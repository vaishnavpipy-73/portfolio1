// script.js
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight
        ? null
        : content.scrollHeight + "px";
    });
  });
});
