// Front-end only: switches between the Featured state and the search results state.
const featured = ["Wildcat Mail", "Faculty/Staff Email", "WSU Online - Canvas", "Employee Directory",
    "Announcements", "New Student Orientation", "Student Course Schedule", "Register for Classes (Add / Drop)",
    "Financial Aid and Scholarships", "View - Pay Tuition and Fees", "Personal Profile", "CatTracks",
    "Online Proctoring", "University Catalog", "eAccounts/Wildcat Cash", "Banner Self Service",
    "Code Purple", "Safe @ Weber for Students", "Feedback", "Update Contact Information"];

const results = ["Register for Classes (Add / Drop)", "University Catalog", "Registration Schedule Builder",
    "Registration Time - Check Status", "Search Course Schedule", "Student Course Schedule", "Student Grades",
    "Record Holds", "New Student Orientation", "Firewall Rule Registration Form", "Financial Aid and Scholarships",
    "Student Information Release Form", "Wildcat Store", "CatTracks", "Find My Advisor", "Official Transcript",
    "Enrollment Deferment Form", "View - Pay Tuition and Fees", "WSU Online - Canvas", "Unofficial Transcript"];

// Only this card leaves the page.
const links = { "Register for Classes (Add / Drop)": "registrationSubMenu.html" };

const cards = document.getElementById("cards");
const heading = document.getElementById("results-heading");
const status = document.getElementById("status");
const featuredLink = document.getElementById("cat-featured");

function render(list, title, isFeatured) {
    cards.innerHTML = "";
    list.forEach((name) => {
        const href = links[name];
        const li = document.createElement("li");
        li.className = "card" + (href ? " is-link" : "");
        li.innerHTML =
            '<h3 class="card-title"><a href="' + (href || "#") + '"></a></h3>' +
            '<span class="app-icon" aria-hidden="true"></span>' +
            '<div class="card-actions">' +
            '<button type="button" class="card-btn">Details</button>' +
            '<button type="button" class="card-btn fav" aria-pressed="false">Favorite</button></div>';
        li.querySelector("a").textContent = name;
        cards.appendChild(li);
    });
    heading.textContent = title;
    if (isFeatured) featuredLink.setAttribute("aria-current", "true");
    else featuredLink.removeAttribute("aria-current");
    status.textContent = title + ": " + list.length + " apps shown.";
}

document.getElementById("search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const q = document.getElementById("portal-search").value.trim();
    render(results, q ? "eWeber Search Results for \u2018" + q + "\u2019" : "eWeber Search Results", false);
    heading.focus();
});

featuredLink.addEventListener("click", (event) => {
    event.preventDefault();
    render(featured, "Featured", true);
});

cards.addEventListener("click", (event) => {
    const fav = event.target.closest(".fav");
    if (fav) {
        const on = fav.getAttribute("aria-pressed") === "true";
        fav.setAttribute("aria-pressed", String(!on));
        fav.textContent = on ? "Favorite" : "Favorited";
    }
});

render(featured, "Featured", true);