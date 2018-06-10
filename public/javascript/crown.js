$(document).ready(function() {
    $("div.cr.button.pulse, button.cr.button.pulse, a.menu-item.pulse").click(function(e) {
        e.preventDefault();
        $('.ripple').remove();

        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            btn_width = $(this).width(),
            btn_height = $(this).height();

        $(this).prepend("<span class='ripple'></span>");


        if (btn_width >= btn_height) {
            btn_height = btn_width;
        } else {
            btn_width = btn_height;
        }

        var x = e.pageX - posX - btn_width / 2;
        var y = e.pageY - posY - btn_height / 2;


        $(".ripple").css({
            width: btn_width,
            height: btn_height,
            top: y + 'px',
            left: x + 'px'
        }).addClass("ripple-active");
    })

    var arr = $('.cr-material.with.counter > .m-field').toArray()
    arr.forEach(function(elem, i) {
        if (!$(elem).next().is('span')) {
            var span = $("<span></span>")
            span.attr('maximum', '120')
            span.text($(elem).val().length + '/' + span.attr('maximum'))
            $(elem).after(span)
        } else {
            $(elem).next().text($(elem).val().length + '/' + $(elem).next().attr('maximum'))
        }
    })
    $('.m-field').focus(function() {
        $(this).parent().addClass('is-focused has-label');
    })
    $('.with.counter > .m-field').on("input", function(e) {
        var span = $(this).next();
        if (!$(this).parent().hasClass('words')) {
            if (span.attr('maximum').length != 0) {
                span.text($(this).val().split("").length + '/' + span.attr('maximum'))
            }
            var currentVal = span.text().split('/')[0];
            if (parseInt(currentVal) > parseInt(span.attr('maximum'))) {
                span.addClass('count-overflow')
            } else if (span.hasClass('count-overflow')) {
                span.removeClass('count-overflow')
            }
        } else {
            if (span.attr('maximum').length != 0) {
                var numberofwords = $(this).val().split(" ").filter(function(v) { return v !== '' })
                span.text(numberofwords.length + '/' + span.attr('maximum'))
            }
            var currentVal = span.text().split('/')[0];
            if (parseInt(currentVal) > parseInt(span.attr('maximum'))) {
                span.addClass('count-overflow')
            } else if (span.hasClass('count-overflow')) {
                span.removeClass('count-overflow')
            }
        }

    })
    $('.m-field').blur(function() {
        var parent = $(this).parent();
        if ($(this).val() == '') {
            parent.removeClass('has-label');
        }
        parent.removeClass('is-focused');
    })
    if ($('.m-field').val().trim().length > 0) {
        $('.m-field').parent().addClass('is-focused has-label');
    }
})