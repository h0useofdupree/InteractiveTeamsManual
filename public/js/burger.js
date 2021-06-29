document.querySelector(".burger").addEventListener('click', () => {
    var element = document.querySelector("nav .menu-bar");
    document.querySelector(".menu-bar").classList.toggle("active");
    document.querySelector(".navigation").classList.toggle("active");
});