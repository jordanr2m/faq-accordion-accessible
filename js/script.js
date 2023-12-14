const accordionHeaders = document.querySelectorAll(".accordion-header");

// .call uses the first argument it is passed and assigns it to "this" (the Node list, in this case). The subsequent arguments (the parameter, in this case) will be passed to the function
// Array.prototype.forEach converts a node list to a true array by passing it the node list as its first argument. This line of code is equivalent to [].forEach.call() (creating an empty array first)
Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
    let target = accordionHeader.parentElement.nextElementSibling; // grabs pannels with text
    //   console.log({target}); Returns dd panel elements
    accordionHeader.addEventListener("click", () => {
      let expanded = accordionHeader.getAttribute("aria-expanded") === "true" || false;
    //   console.log(expanded); // Flag variable. .getAttribute() always returns a string, which is why we compare it to "true" the string, not true the boolean, to see if it is true or not. This is saying that expanded will be either true or false depending on the result of this comparison
      accordionHeader.setAttribute("aria-expanded", !expanded); // Sets it to the opposite of its current state
      target.hidden = expanded; // Set hidden to true or false
    });
})