// Front-end only: opens and closes the account panel and toggles the W# display.
const toggle = document.getElementById("account-toggle");
const panel = document.getElementById("account-panel");

function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
}

toggle.addEventListener("click", () => setOpen(panel.hidden));

// Close when clicking outside the panel.
document.addEventListener("click", (event) => {
    if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) {
        setOpen(false);
    }
});

// Close with Escape and return focus to the profile button.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
        setOpen(false);
        toggle.focus();
    }
});

// Show or hide a placeholder W number.
const wButton = document.getElementById("wnumber-toggle");
const wText = document.getElementById("wnumber-text");
wButton.addEventListener("click", () => {
    const showing = wButton.getAttribute("aria-pressed") === "true";
    wButton.setAttribute("aria-pressed", String(!showing));
    wText.textContent = showing ? "Show W#" : "W00000000";
});