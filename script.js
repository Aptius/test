window.addEventListener("scroll", function() {
    const header = document.querySelector(".header_section");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
