/*==================== SNAKE BACKGROUND ====================*/

document.addEventListener('DOMContentLoaded', () => {
  const snakeGrid = document.getElementById('snake-grid');
  if (!snakeGrid) return;


  function renderSnakeGrid() {
    snakeGrid.innerHTML = '';


    const styles = window.getComputedStyle(snakeGrid);
    const cell = parseFloat(styles.getPropertyValue('--cell-size'));
    const gap = parseFloat(styles.getPropertyValue('--gap-size'));

    const fullSize = cell + gap;

    const columns = Math.ceil((snakeGrid.clientWidth + gap) / fullSize);
    const rows = Math.ceil((snakeGrid.clientHeight + gap) / fullSize);
    const totalCells = columns * rows;

    // сетка формируется динамически
    snakeGrid.style.gridTemplateColumns = `repeat(${columns}, ${cell}px)`;
    snakeGrid.style.gridTemplateRows = `repeat(${rows}, ${cell}px)`;
    snakeGrid.style.gap = `${gap}px`;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < totalCells; i++) {
      const cellEl = document.createElement('i');
      cellEl.classList.add('snake__cell');
      fragment.appendChild(cellEl);
    }

    snakeGrid.appendChild(fragment);
  }

  const resizeObserver = new ResizeObserver(renderSnakeGrid);
  resizeObserver.observe(snakeGrid);
  renderSnakeGrid();
});
/*==================== MENU SHOW Y HIDDEN ====================*/
const  navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-burger'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.menu__item');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== TYPING ANIMATION ====================*/
document.addEventListener("DOMContentLoaded", function () {
    new Typed(".typing", {
      strings: ["ML Engineer", "Data scientist", "Data Analyst", "Web developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset;

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id');

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive);