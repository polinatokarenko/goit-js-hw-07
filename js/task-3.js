const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        span.textContent = "Anonymous";
    } else {
        span.textContent = input.value.trim();
    }
})