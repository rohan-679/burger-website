const navSlide = ()=>{
    const burger = document.querySelector('#hamburger');
    const nav = document.querySelector('.navbar .lower-nav .navigation ul');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });
}

navSlide();