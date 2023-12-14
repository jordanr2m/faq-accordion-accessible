const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    let target = header.parentElement.nextElementSibling;
    console.log({target});

    header.addEventListener("click", () => {
        let expanded = header.getAttribute("aria-expanded") === "true" || false;
        header.setAttribute("aria-expanded", !expanded);

        if (target.attributes.visibile === "visible") {
            target.setAttribute("visibility", "visible");
        } else {
            target.setAttribute("visibility", "hidden");
        }
    })
});