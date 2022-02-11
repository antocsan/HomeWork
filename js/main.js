$(document).ready(function() {
    //modal
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    })
    closeBtn.on('click', function() {
            modal.toggleClass('modal--visible');
        })
        //modal


    //scroll 
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
    //scroll 
    const swiper = new Swiper('.swiper', {
            loop: true,

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
        //wow animate
    new WOW().init();


    //validation form



    $(".control__form").validate({
        errorClass: "invalid",
        rules: {
            userName: "required",
            userPhone: "required",
        },
        messages: {
            userName: "Пожалуйста введите ваше имя",
            userPhone: "Пожалуйста введите ваш телефон",

        }
    });


    $(".modal__form").validate({
        errorClass: "invalid",
        rules: {
            userName: "required",
            userPhone: "required",
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: "Пожалуйста введите ваше имя",
            userPhone: "Пожалуйста введите ваш телефон",
            userEmail: {
                required: "Пожалуйста укажите ваш Email",
                email: "Укажите Email в формате : name@domain.com"
            }
        }
    });


    // mask for form

    $('[type=tel]').mask('+375(00)000-00-00', { placeholder: "+375(__)___-__-__" });


});