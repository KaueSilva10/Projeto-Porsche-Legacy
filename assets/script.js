window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 650) {
        navbar.classList.remove('transparente');
    } else {
        navbar.classList.add('transparente');
    }
}
)