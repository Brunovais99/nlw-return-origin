window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButton()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll"); 
    }
}

function showBackToTopButton() {
    if(scrollY > 600) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show"); 
    }
}


function openMenu() {
    document.body.classList.add("menuExpanded");
}

function closeMenu() {
    document.body.classList.remove("menuExpanded");
}



ScrollReveal({
    origin: 'top',
    duration: 1000,
}).reveal(`#home, #home img, #home .stats, #services, #services header, #services .cards, #about, #about header, #about .content, #contact, #contact header, #contact .content`);