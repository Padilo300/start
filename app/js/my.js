$(document).ready(function () {

    
    /////////////////////////////////////////////////////////
    /////                                               /////
    ///// Запуск счетчика цифр при скролле              /////   
    /////                                               /////
    /////////////////////////////////////////////////////////
    
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function () {
        if (!show) return false;                      // Отменяем показ анимации, если она уже была выполнена
        var w_top       = $(window).scrollTop()     ; // Количество пикселей на которое была прокручена страница
        var e_top       = $(countbox).offset().top  ; // Расстояние от блока со счетчиками до верха всего документа
        var w_height    = $(window).height()        ; // Высота окна браузера
        var d_height    = $(document).height()      ; // Высота всего документа
        var e_height    = $(countbox).outerHeight() ; // Высота всего документа
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $(".benefits__number").spincrement();
            // $('.benefits__number').css('opacity', '1');
            // $('.benefits__number').spincrement({
            //     thousandSeparator: "",
            //     duration: 1200
            // });
            show = false;
        }
    });

     // откроет меню
     function openNav(){
        $('.mobilBar').toggleClass("openNav");
        $('#nav').toggleClass('showNav');
    }

    $('.mobilBar').on('click',function(){
        openNav();
    });





});