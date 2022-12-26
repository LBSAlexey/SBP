const animationItems = document.querySelector('.animItems');

window.addEventListener('scroll', animationScroll);
function animationScroll() {
    const introBtn = document.querySelector('.intro__btn')
    const scroll = window.scrollY;
    // let introH = intro.offsetHeight;
    if(scroll >= 0) { 
        animationItems.classList.add('action');
        introBtn.classList.add('action');
    }
}

animationScroll();


// почему-то не работает

// const animationItems = document.querySelector('.anim_items') 

// if(animationItems.length > 0) { // проверка на наличия такого класса
//     window.addEventListener('scroll', animScroll);
//     function animScroll() {
//         for (let index = 0; index < animationItems.length; index++) {
//             const animationItem = animationItems[index]; // переборка его
//             const animationItemHeight = animationItem.offsetHeight; // высота объекта
//             const animationItemOffset = offset(animationItem).top; // позиция объекта
//             const animationStart = 4; // коэф. или точнее 1/4 высота браузера

//             let animationItemPoint = window.innerHeight - animationItemHeight / animationStart;

//             if(animationItemHeight > window.innerHeight) { // если высота объекта выше высоты браузера
//                 animationItemPoint = window.innerHeight - window.innerHeight / animationStart;
//             }

//             if((pageYOffset > animationItemOffset - animationItemPoint) && pageYOffset < (animationItemOffset + animationItemHeight)) { // условие: если прокрутка больше позиции объекта минус его начальная точка и пролистнули меньше стандартной позиции объекта + его высота
//                 animationItem.classList.add('.action')
//             } else {
//                 animationItem.classList.remove('.action')
//             }

//         }
//     }
//     function offset(el) { // хз что за х
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = pageYOffset || document.documentElement.scrollTop;
//         return {top: rect.top + scrollTop, left: rect.lefteft + scrollLeft} // вроде как вычесляет точное положение объекта или что-то типо того
//     }
//     animScroll(); // когда заходишь на сайт анимация сразу проигрывается
// }