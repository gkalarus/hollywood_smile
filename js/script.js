$(window).on('load', function() {
    $('.loader .inner').fadeOut(500, function() {
        $('.loader').fadeOut(750);
    });
})

$(document).ready(function() {
    var $navBar = $('.nav--etefu');
    var $navBarBtns = $navBar.find('button');
    var $navBarItem = $navBar.find('.nav__item');
    var $navItemTitle = $navBar.find('.nav__item-title');
    var $languages = $('.languages').find('a');
    var $plBtn = $languages.eq(0);
    var $enBtn = $languages.eq(1);
    var $social = $('.social').find('a');
    
    console.log($plBtn);

    $.scrollify({
        section: ".section",
        before: function(index) {
            if(index === 0) {
                $('.menu__link').css('color', '#0a143c');
                $('.logo__img').attr('src', './img/main/logo.png');
                $navItemTitle.css('color', '#363e5d');
                $navBarItem.removeClass('nav__item--current');
                $navBarItem.eq(0).addClass('nav__item--current');
                $languages.css('color', "#0a143c");
                $social.css('color', '#000');
            }else if (index === 1) {
                $('.menu__link').css('color', '#ffffff');
                $('.logo__img').attr('src', './img/main/logo_white.png');
                $('.section-2__content--text').addClass('rightAnimation');
                $('.section-2__content--text').addClass('rightAnimation');
                $('.section-2__content--img').addClass('shakeAnimation');
                $navItemTitle.css('color', '#fff');
                $navBarItem.removeClass('nav__item--current');
                $navBarItem.eq(1).addClass('nav__item--current');
                $languages.css('color', "#fff");
                $social.css('color', '#fff');
            }else if (index === 2) {
                $('.menu__link').css('color', '#0a143c');
                $('.logo__img').attr('src', './img/main/logo.png');
                $('.section-3__content--text').addClass('leftAnimation');
                $('.section-3__content--text').addClass('leftAnimation');
                $('.section-3__content--img').addClass('shakeAnimation');
                $navItemTitle.css('color', '#363e5d');
                $navBarItem.removeClass('nav__item--current');
                $navBarItem.eq(2).addClass('nav__item--current');
                $languages.css('color', "#0a143c");
                $social.css('color', '#000');
            }else if (index === 3) {
                $('.menu__link').css('color', '#ffffff');
                $('.logo__img').attr('src', './img/main/logo_white.png');
                $('.section-4__content--text').addClass('rightAnimation');
                $('.section-4__content--text').addClass('rightAnimation');
                $('.section-4__content--img').addClass('shakeAnimation');
                $navItemTitle.css('color', '#fff');
                $navBarItem.removeClass('nav__item--current');
                $navBarItem.eq(3).addClass('nav__item--current');
                $languages.css('color', "#fff");
                $social.css('color', '#fff');
            }
        },
    });

    $('#moveDown-1').click(function() {
        $.scrollify.next();
    })
        
    $('#moveDown-2').click(function() {
        $.scrollify.next();
    })
    
    $navBarBtns.on('click', function() {
        if($(this).attr('aria-label') === 'Item 1') {
            $.scrollify.move('#1');
        } else if ($(this).attr('aria-label') === 'Item 2') {
            $.scrollify.move('#2');
        } else if ($(this).attr('aria-label') === 'Item 3') {
            $.scrollify.move('#3');
        } else {
            $.scrollify.move('#4');
        }
    })

    $plBtn.on('click', function(e) {
        e.preventDefault();
        $enBtn.parent().removeClass('border');
        $plBtn.parent().addClass('border');
    })

    $enBtn.on('click', function(e) {
        e.preventDefault();
        $plBtn.parent().removeClass('border');
        $enBtn.parent().addClass('border');
    })

    
     
})