let inc = document.querySelector(".inc");
let count = document.querySelector(".count");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");
let counter = JSON.parse(localStorage.getItem("mycounter")) || 0;
count.textContent = counter
inc.addEventListener("click", () => {
    counter++
    count.textContent = counter
    localStorage.setItem("mycounter", JSON.stringify(counter))
})
dec.addEventListener("click", () => {
    counter--
    count.textContent = counter
    localStorage.setItem("mycounter", JSON.stringify(counter))
})
reset.addEventListener("click", () => {
    counter = 0
    count.textContent = counter
    localStorage.setItem("mycounter", JSON.stringify(counter))
})