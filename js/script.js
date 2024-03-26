const accordionHeaders = Array.from(document.querySelectorAll(".accordion-header"));

accordionHeaders.forEach(accordionHeader => {
  let target = accordionHeader.parentElement.nextElementSibling;

  accordionHeader.addEventListener("click", () => {
    let expanded = accordionHeader.getAttribute("aria-expanded") === "true" || false;
    accordionHeader.setAttribute("aria-expanded", !expanded); // Sets it to the opposite of its current state
    target.hidden = expanded;
  });
})