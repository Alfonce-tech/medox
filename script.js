document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("mouseover", function () {
        this.querySelector(".dropdown-menu").style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        this.querySelector(".dropdown-menu").style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    
    let index = 0;
    function slideImages() {
        index++;
        if (index > 3) index = 0; // Reset after last image
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(slideImages, 2000); // Change image every 2 seconds
});
