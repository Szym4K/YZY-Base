window.addEventListener("load", () => {
    const navbar = document.querySelector(".fade-navbar");
    const content = document.querySelector(".fade-content");

    navbar.classList.add("fade-in");

    setTimeout(() => {
        content.classList.add("fade-in");
    }, 300);
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
