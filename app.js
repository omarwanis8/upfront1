document.addEventListener("DOMContentLoaded", function() {
    // Get all the <a> elements inside <nav>
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Check if the link is an internal anchor (starts with #)
            if (this.getAttribute("href").startsWith("#")) {
                // Prevent the default behavior of the link
                event.preventDefault();

                // Remove 'active' class from all links
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                // Add 'active' class to the clicked link
                this.classList.add("active");

                // Scroll to the section smoothly
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});



