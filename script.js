/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement =
    document.getElementById("typing");


const words = [

    "Web Developer",

    "Software Developer",

    "Java Developer",

    "Game Developer",

    "Problem Solver"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting
            ? 60
            : 100

    );

}


typeEffect();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "active"
        );


        menuBtn.textContent =

            navLinks.classList.contains(
                "active"
            )

                ? "✕"

                : "☰";

    }
);


/* Close mobile menu */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "active"
                );

                menuBtn.textContent =
                    "☰";

            }
        );

    });


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            themeBtn.textContent =
                "☀️";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            themeBtn.textContent =
                "🌙";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    }
);


/* Load saved theme */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light"
    );

    themeBtn.textContent =
        "☀️";

}


/* =====================================================
   SCROLL ANIMATION
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .timeline-item, .about-content"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(
    element => {

        observer.observe(element);

    }
);




/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section"
    );


const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navItems.forEach(
            link => {

                link.style.color = "";


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.style.color =
                        "var(--primary)";

                }

            }
        );

    }
);