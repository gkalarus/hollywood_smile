$(document).ready(function() {
    $.scrollify({
        section: ".section",
        before: function(index) {
            if(index === 0) {
                $('.menu__link').css('color', '#0a143c');
                $('.logo__img').attr('src', './img/main/logo.png');
            }else if (index === 1) {
                $('.menu__link').css('color', '#ffffff');
                $('.logo__img').attr('src', './img/main/logo_white.png');
                $('.section-2__content--text').addClass('rightAnimation');
                $('.section-2__content--text').addClass('rightAnimation');
                $('.section-2__content--img').addClass('shakeAnimation');

            }else if (index === 2) {
                $('.menu__link').css('color', '#0a143c');
                $('.logo__img').attr('src', './img/main/logo.png');
                $('.section-3__content--text').addClass('leftAnimation');
                $('.section-3__content--text').addClass('leftAnimation');
                $('.section-3__content--img').addClass('shakeAnimation');
            }else if (index === 3) {
                $('.menu__link').css('color', '#ffffff');
                $('.logo__img').attr('src', './img/main/logo_white.png');
                $('.section-4__content--text').addClass('rightAnimation');
                $('.section-4__content--text').addClass('rightAnimation');
                $('.section-4__content--img').addClass('shakeAnimation');
            }
        },
    });

    $('#moveDown-1').click(function() {
        $.scrollify.next()
    })
        
    $('#moveDown-2').click(function() {
        $.scrollify.next()
    })
    
    
    
  

})