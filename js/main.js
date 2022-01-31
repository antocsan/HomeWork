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
});