window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButton()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    //verificar se a seção passou da linha
    //quais dados vou precisar?
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    //verificar se abase está abaixo da linha alvo

    //a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight;

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;


    //limites da seção passou da linha alvo
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;


    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);


    menuElement.classList.remove('active');
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    } 
}

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll'); 
    }
}

function showBackToTopButton() {
    if(scrollY > 600) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show'); 
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