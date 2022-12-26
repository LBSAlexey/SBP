// $(document).ready(function() {
//     $('.btn').on('click', function() {
//         $(this).siblings().removeClass('active');
//         $(this).addClass('active');

        // const btnHome = $('#btn_home');
        // const btnSearch = $('#btn_search');
        // const btnAbout = $('#btn_about');    

        // scrollPos = $(window).scrollTop();


        // $(window).on('scroll', function() {

        //     scrollPos = $(this).scrollTop();

        //     // const btnHomeH = btnHome.innerHeigth();
        //     // const btnSearchH = btnSearch.innerHeigth();
        //     // const btnAboutH = btnAbout.innerHeigth();

            
        //     if(scrollPos <= 1200) {
        //     btnHome.addClass('active');
        //     } else if (scrollPos > 1200 && scroll <= 2400) {
        //         btnSearch.addClass('active');
        //     } else if (scrollPos > 2400) {
        //         btnAbout.addClass('active');
        //     }
        // });  
    // });
// });

// не действительна

$(function() {

    $("[data-scroll]").on('click', function(ev) {
        ev.preventDefault();

        let elId = $(this).data('scroll');
        let elOffset = $(elId).offset().top;

        //хз вроде как работает как я думаю

    if(elId == '#home'){ 
        $("html, body").animate({
            scrollTop: 0
        }, 500)
    } else {
        $("html, body").animate({
            scrollTop: elOffset + 100
        }, 700)
    }
        console.log(elOffset)
    })
    
})

// токо не бейте

const section = document.querySelectorAll('section');
const btnHome = document.querySelector('#btn_home');
const btnSearch = document.querySelector('#btn_search');
const btnAbout = document.querySelector('#btn_about');


window.addEventListener('scroll', () => { // просматривает в какой секции находится пользователь
    let current = '';

    section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeigth = section.clientHeight;
        const scrollWindow = window.pageYOffset
        if(scrollWindow >= sectionTop - sectionHeigth / 3) {
            current = section.getAttribute('id');
        }

        // я на самом деле хз как написать иначе, так конечно херова, но зато работает.

    }) // sorry for that
    console.log(current)
    if(current == 'home') {
        btnHome.classList.add('active');
        btnAbout.classList.remove('active');
        btnSearch.classList.remove('active');
    } else if(current == 'search') {
        btnSearch.classList.add('active');
        btnAbout.classList.remove('active');
        btnHome.classList.remove('active');
    } else {
        btnAbout.classList.add('active');
        btnHome.classList.remove('active');
        btnSearch.classList.remove('active');
    }
})

const header = document.querySelector('.header');

window.addEventListener('scroll', scrollHide);
function scrollHide () {
    
  const scroll = window.pageYOffset;
  if(scroll > 2600) {
    header.classList.add('hide');
  } else {
      header.classList.remove('hide');
      header.classList.add('show');
  }
}

scrollHide();