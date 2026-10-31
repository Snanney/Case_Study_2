// Front-end only: tabs, Advanced Search toggle, search message, and the empty calendar grid.
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));

function selectTab(tab) {
    tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    tab.focus();
}

tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") selectTab(tabs[(i + 1) % tabs.length]);
        if (event.key === "ArrowLeft") selectTab(tabs[(i - 1 + tabs.length) % tabs.length]);
    });
});

const advToggle = document.getElementById("adv-toggle");
advToggle.addEventListener("click", () => {
    const open = advToggle.getAttribute("aria-expanded") === "true";
    advToggle.setAttribute("aria-expanded", String(!open));
    document.getElementById("adv").hidden = open;
});

const status = document.getElementById("search-status");
document.getElementById("class-form").addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "No content provided.";
});
document.getElementById("class-form").addEventListener("reset", () => { status.textContent = ""; });

// Empty weekly grid, 6am to 9pm.
const body = document.getElementById("cal-body");
for (let h = 6; h <= 21; h++) {
    const label = (h % 12 || 12) + (h < 12 ? "am" : "pm");
    body.insertAdjacentHTML("beforeend", '<tr><th scope="row">' + label + "</th>" + "<td></td>".repeat(7) + "</tr>");
}