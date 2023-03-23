const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    (window.pageYOffset > 20) ? navbar.classList.add('bg-primary') : navbar.classList.remove('bg-primary')
})