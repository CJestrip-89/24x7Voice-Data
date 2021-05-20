// Navbar Fixed Change

const nav = document.querySelector('.nav')
window.addEventListener('scroll',fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 50 ){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

   
    burger.addEventListener('click',()=>{
            //Toggle Nav
            nav.classList.toggle('nav-active');
             // Animate Links
            navLinks.forEach((link, index)=>{
                if(link.style.animation){
                    link.style.animation = ''
                }else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+.3}s`;
                }

             });

            //  Burger Animation
            burger.classList.toggle('toggle');
            
    });
}

// invoke the Functions
navSlide();