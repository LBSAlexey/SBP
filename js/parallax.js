const parallax = document.getElementById('bg');
parallax.style.backgroundPositionY = 0 + 'px'
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset; // показывает на скок скролл произошёл
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    console.log(offset)
    // console.log(offset*0.7)

})
