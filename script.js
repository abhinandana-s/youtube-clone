// =========================
// ELEMENTS
// =========================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const videoCards = document.querySelectorAll(".video-card");

const categoryButtons =
document.querySelectorAll(".categories button");

const menuBtn =
document.querySelector(".menu-btn");

const sidebar =
document.querySelector(".sidebar");

// =========================
// SEARCH FUNCTION
// =========================

function searchVideos() {

    const searchValue =
    searchInput.value.toLowerCase().trim();

    videoCards.forEach(card => {

        const title =
        card.dataset.title.toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// Search Button Click
searchBtn.addEventListener(
    "click",
    searchVideos
);

// Search Using Enter Key
searchInput.addEventListener(
    "keyup",
    (event) => {

        if (event.key === "Enter") {
            searchVideos();
        }

    }
);

// =========================
// CATEGORY FILTER
// =========================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const category =
        button.textContent.toLowerCase();

        videoCards.forEach(card => {

            const title =
            card.dataset.title.toLowerCase();

            if (
                category === "all" ||
                title.includes(category)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// =========================
// SIDEBAR TOGGLE
// =========================

let sidebarVisible = true;

menuBtn.addEventListener("click", () => {

    if (window.innerWidth <= 768) {

        if (sidebarVisible) {

            sidebar.style.display = "none";
            sidebarVisible = false;

        } else {

            sidebar.style.display = "block";
            sidebarVisible = true;

        }

    } else {

        if (sidebar.style.width === "80px") {

            sidebar.style.width = "240px";

            document.querySelector(".videos")
                .style.marginLeft = "240px";

            document.querySelector(".categories")
                .style.left = "240px";

            document.querySelectorAll(".sidebar span")
                .forEach(span => {
                    span.style.display = "inline";
                });

        } else {

            sidebar.style.width = "80px";

            document.querySelector(".videos")
                .style.marginLeft = "80px";

            document.querySelector(".categories")
                .style.left = "80px";

            document.querySelectorAll(".sidebar span")
                .forEach(span => {
                    span.style.display = "none";
                });

        }

    }

});

// =========================
// VIDEO CLICK EVENT
// =========================

videoCards.forEach(card => {

    card.addEventListener("click", () => {

        const title =
        card.dataset.title;

        alert(`Opening Video:\n${title}`);

    });

});

// =========================
// CLEAR SEARCH WHEN EMPTY
// =========================

searchInput.addEventListener("input", () => {

    if (searchInput.value === "") {

        videoCards.forEach(card => {

            card.style.display = "block";

        });

    }

});

// =========================
// PAGE LOADED
// =========================

window.addEventListener("load", () => {

    console.log(
        "YouTube Clone Loaded Successfully 🚀"
    );

});