/*================================ typed js =========================*/
    var typed = new Typed('#element', {
      strings: ['FrontEnd Developer', ' Web Developer'],
      typeSpeed: 70,
      backSpeed: 70,
      backdelay: 1000,
      loop: true,
    });


/*================================ toggle icon navbar =========================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*================================ scroll section active link =========================*/

let section = document.querySelectorAll('.section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;  
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
});

/*================================ sticky navbar =========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /*================================ remove toggle icon and navbar =========================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*================================ Scroll Reveal =========================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form' , { origin: 'top' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*============================= More about me ============================ */
document.querySelector('about').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    const targetId = this.getAttribute('href'); // Get the target section id from the href attribute
    const targetSection = document.querySelector(targetId); // Select the target section

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

