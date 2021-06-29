document.querySelector(".burger").addEventListener('click', () => {
    var element = document.querySelector("nav .menu-bar");
    if (element) {
        document.querySelector(".menu-bar").classList.toggle("active");
        document.querySelector(".navigation").classList.toggle("active");
        //document.querySelector(".navigation").style.position = "unset";
    }
});