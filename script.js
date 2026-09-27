/* =========================================================
   RABAI YAZID RUSHAGAMA — WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


function closeMobileMenu() {

    if (!navMenu || !menuToggle) return;

    navMenu.classList.remove("open");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

}


function openMobileMenu() {

    if (!navMenu || !menuToggle) return;

    navMenu.classList.add("open");

    menuToggle.textContent = "✕";

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

}


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                navMenu.classList.contains("open");

            if (isOpen) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );


    /* Close menu after clicking a navigation link */

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );

    });

}


/* =========================================================
   2. CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (!navMenu || !menuToggle) return;

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            navMenu.classList.contains("open") &&
            !clickedInsideMenu &&
            !clickedToggle
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   3. CLOSE MENU WITH ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   4. CURRENT YEAR
========================================================= */

const yearElements =
    document.querySelectorAll("#year");


yearElements.forEach(function (element) {

    element.textContent =
        new Date().getFullYear();

});


/* =========================================================
   5. CLOSE MOBILE MENU WHEN WINDOW GETS BIGGER
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 700) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   6. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".intro-card, " +
        ".experience-card, " +
        ".project-card, " +
        ".timeline-item, " +
        ".info-card"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal-element"
            );

            revealObserver.observe(
                element
            );

        }
    );


} else {

    /* Fallback for older browsers */

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal-visible"
            );

        }
    );

}


/* =========================================================
   7. ACTIVE NAVIGATION
========================================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


const navigationLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


navigationLinks.forEach(
    function (link) {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            navigationLinks.forEach(
                function (item) {

                    item.classList.remove(
                        "active"
                    );

                }
            );

            link.classList.add(
                "active"
            );

        }

    }
);


/* =========================================================
   8. PREVENT EMPTY LINKS FROM JUMPING
========================================================= */

document.querySelectorAll(
    'a[href="#"]'
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    }
);


/* =========================================================
   9. SMOOTH INTERNAL SCROLLING
========================================================= */

document.querySelectorAll(
    'a[href^="#"]:not([href="#"])'
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                const target =
                    document.querySelector(
                        targetId
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);


/* =========================================================
   10. PAGE READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

 /* =========================================================
   7. ACTIVE NAVIGATION
========================================================= */

const navigationLinks = document.querySelectorAll(".nav-menu a");

let currentPage = window.location.pathname.split("/").pop();

/* Treat an empty filename as the Home page */
if (
    currentPage === "" ||
    currentPage === "/"
) {
    currentPage = "index.html";
}

navigationLinks.forEach(function (link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }

});
    }
);