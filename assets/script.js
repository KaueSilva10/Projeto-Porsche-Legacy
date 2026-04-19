window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if (window.scrollY > 550) {
        header.classList.remove('transparente');
    } else {
        header.classList.add('transparente');
    }
});