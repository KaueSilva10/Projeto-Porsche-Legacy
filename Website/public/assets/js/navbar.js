window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if (window.scrollY > 615) {
        header.classList.remove('transparente');
    } else {
        header.classList.add('transparente');
    }
});