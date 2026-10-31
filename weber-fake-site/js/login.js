// Front-end only: checks for empty fields and shows an error.
// No real authentication. A filled form continues to home.html.
const form = document.getElementById("login-form");

function check(input) {
    const field = input.parentElement;
    const error = document.getElementById(input.id + "-error");
    const empty = input.value.trim() === "";
    field.classList.toggle("invalid", empty);
    input.setAttribute("aria-invalid", empty ? "true" : "false");
    error.hidden = !empty;
    return !empty;
}

form.addEventListener("submit", (event) => {
    const inputs = [form.username, form.password];
    const results = inputs.map(check);
    if (results.includes(false)) {
        event.preventDefault();
        inputs[results.indexOf(false)].focus();
    }
});

form.addEventListener("input", (event) => {
    if (event.target.parentElement.classList.contains("invalid")) check(event.target);
});