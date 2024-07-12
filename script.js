window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const scale = 1 + scrollPosition / 1000; // Adjust the divisor for desired scaling rate
    document.querySelector('.banner-img').style.transform = `scale(${scale})`;
});

document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-content').classList.toggle('active');
});