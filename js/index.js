function typeName() {
    const options = {
        strings: ["Bao Huynh"],
        typeSpeed: 50
    };
    
    const typed = new Typed('.typing', options);
};

function changeNavbarWhenScrolled() {
    const header_nav = document.querySelector("header");
    if (window.scrollY >= document.documentElement.clientHeight * 0.1) {
        header_nav.classList.add("header--fixed-top-scrolled");
    } else {
        header_nav.classList.remove("header--fixed-top-scrolled");
    }
}

window.onscroll = function() { changeNavbarWhenScrolled(); };

window.onload = function() { typeName(); };

