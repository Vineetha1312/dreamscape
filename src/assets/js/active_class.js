document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // All sections on the page
    const navLinks = document.querySelectorAll("nav a"); // All nav links in the menu

    function updateActiveLink() {
        let activeSectionId = "";

        // Check each section to determine which one is currently in the viewport
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                activeSectionId = section.getAttribute("id");
            }
        });

        // Update the active class on nav links
        navLinks.forEach((link) => {
            const href = link.getAttribute("href").substring(1); // Get the ID from href
            if (href === activeSectionId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", updateActiveLink);

    // Smooth scrolling when clicking a link
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height
                    behavior: "smooth",
                });
            }
        });
    });
});
