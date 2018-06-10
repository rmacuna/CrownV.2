
$(document).ready(function () {
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
})

$(document).ready(function() {
    var arr = $('.cr-material.with.counter').children().eq(1)
    arr.each(function(i, obj) {
        if (!$(obj).next().is('span')) {
            var elem = $("<span></span>")
            elem.attr('maximum', '120')
            elem.text($(obj).val().length + '/' + elem.attr('maximum'))
            $(obj).after(elem)
        } else {
            $(obj).next().text($(obj).val().length + '/' + $(obj).next().attr('maximum'))
        }
    })
    $('.m-input, .m-area').focus(function() {
        $(this).parent().addClass('is-focused has-label');
        if ($(this).parent().find('span.m-counter') != null) {
            var parent = $(this).parent();
            var input = $(this);
            var counter = parent.find('span.m-counter');
            if (counter != null) {
                var valcount = input.val().length;
                maxVal = counter.attr('max-value');
                if (maxVal != null) {
                    counter.attr('max-value', valcount + "/" + maxVal.replace(/['"]+/g, ''));
                }
            }
        }
    })
    $('.with.counter > .m-input, .m-area').on("input", function(e) {
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
        }else{
            if (span.attr('maximum').length != 0) {
                var numberofwords = $(this).val().split(" ").filter(function(v){return v!== ''})
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
    $('.m-input, .m-area').blur(function() {
        var parent = $(this).parent();
        var input = $(this);
        var counter = parent.find('span.m-counter');
        if (counter != null) { counter.attr('max-value', maxVal); }
    })
    $('.m-input, .m-area').blur(function() {
        var parent = $(this).parent();
        if ($(this).val() == '') {
            parent.removeClass('has-label');
        }
        parent.removeClass('is-focused');
    })
    if ($('.m-input, .m-area').val().trim().length > 0) {
        $('.m-input, .m-area').parent().addClass('is-focused has-label');
    }
})




$(document).ready(function () {
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
})

$(document).ready(function() {
    var arr = $('.cr-material.with.counter').children().eq(1)
    arr.each(function(i, obj) {
        if (!$(obj).next().is('span')) {
            var elem = $("<span></span>")
            elem.attr('maximum', '120')
            elem.text($(obj).val().length + '/' + elem.attr('maximum'))
            $(obj).after(elem)
        } else {
            $(obj).next().text($(obj).val().length + '/' + $(obj).next().attr('maximum'))
        }
    })
    $('.m-input, .m-area').focus(function() {
        $(this).parent().addClass('is-focused has-label');
        if ($(this).parent().find('span.m-counter') != null) {
            var parent = $(this).parent();
            var input = $(this);
            var counter = parent.find('span.m-counter');
            if (counter != null) {
                var valcount = input.val().length;
                maxVal = counter.attr('max-value');
                if (maxVal != null) {
                    counter.attr('max-value', valcount + "/" + maxVal.replace(/['"]+/g, ''));
                }
            }
        }
    })
    $('.with.counter > .m-input, .m-area').on("input", function(e) {
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
        }else{
            if (span.attr('maximum').length != 0) {
                var numberofwords = $(this).val().split(" ").filter(function(v){return v!== ''})
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
    $('.m-input, .m-area').blur(function() {
        var parent = $(this).parent();
        var input = $(this);
        var counter = parent.find('span.m-counter');
        if (counter != null) { counter.attr('max-value', maxVal); }
    })
    $('.m-input, .m-area').blur(function() {
        var parent = $(this).parent();
        if ($(this).val() == '') {
            parent.removeClass('has-label');
        }
        parent.removeClass('is-focused');
    })
    if ($('.m-input, .m-area').val().trim().length > 0) {
        $('.m-input, .m-area').parent().addClass('is-focused has-label');
    }
})




$(document).ready(function () {
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
})

$(document).ready(function() {
    var arr = $('.cr-material.with.counter').children().eq(1)
    arr.each(function(i, obj) {
        if (!$(obj).next().is('span')) {
            var elem = $("<span></span>")
            elem.attr('maximum', '120')
            elem.text($(obj).val().length + '/' + elem.attr('maximum'))
            $(obj).after(elem)
        } else {
            $(obj).next().text($(obj).val().length + '/' + $(obj).next().attr('maximum'))
        }
    })
    $('.m-input, .m-area').focus(function() {
        $(this).parent().addClass('is-focused has-label');
        if ($(this).parent().find('span.m-counter') != null) {
            var parent = $(this).parent();
            var input = $(this);
            var counter = parent.find('span.m-counter');
            if (counter != null) {
                var valcount = input.val().length;
                maxVal = counter.attr('max-value');
                if (maxVal != null) {
                    counter.attr('max-value', valcount + "/" + maxVal.replace(/['"]+/g, ''));
                }
            }
        }
    })
    $('.with.counter > .m-input, .m-area').on("input", function(e) {
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
        }else{
            if (span.attr('maximum').length != 0) {
                var numberofwords = $(this).val().split(" ").filter(function(v){return v!== ''})
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
    $('.m-input, .m-area').blur(function() {
        var parent = $(this).parent();
        var input = $(this);
        var counter = parent.find('span.m-counter');
        if (counter != null) { counter.attr('max-value', maxVal); }
    })
    $('.m-input, .m-area').blur(function() {
        var parent = $(this).parent();
        if ($(this).val() == '') {
            parent.removeClass('has-label');
        }
        parent.removeClass('is-focused');
    })
    if ($('.m-input, .m-area').val().trim().length > 0) {
        $('.m-input, .m-area').parent().addClass('is-focused has-label');
    }
})




$(document).ready(function () {
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
})

$(document).ready(function() {
    var arr = $('.cr-material.with.counter').children().eq(1)
    arr.each(function(i, obj) {
        if (!$(obj).next().is('span')) {
            var elem = $("<span></span>")
            elem.attr('maximum', '120')
            elem.text($(obj).val().length + '/' + elem.attr('maximum'))
            $(obj).after(elem)
        } else {
            $(obj).next().text($(obj).val().length + '/' + $(obj).next().attr('maximum'))
        }
    })
    $('.m-input, .m-area').focus(function() {
        $(this).parent().addClass('is-focused has-label');
        if ($(this).parent().find('span.m-counter') != null) {
            var parent = $(this).parent();
            var input = $(this);
            var counter = parent.find('span.m-counter');
            if (counter != null) {
                var valcount = input.val().length;
                maxVal = counter.attr('max-value');
                if (maxVal != null) {
                    counter.attr('max-value', valcount + "/" + maxVal.replace(/['"]+/g, ''));
                }
            }
        }
    })
    $('.with.counter > .m-input, .m-area').on("input", function(e) {
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
        }else{
            if (span.attr('maximum').length != 0) {
                var numberofwords = $(this).val().split(" ").filter(function(v){return v!== ''})
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
    $('.m-input, .m-area').blur(function() {
        var parent = $(this).parent();
        var input = $(this);
        var counter = parent.find('span.m-counter');
        if (counter != null) { counter.attr('max-value', maxVal); }
    })
    $('.m-input, .m-area').blur(function() {
        var parent = $(this).parent();
        if ($(this).val() == '') {
            parent.removeClass('has-label');
        }
        parent.removeClass('is-focused');
    })
    if ($('.m-input, .m-area').val().trim().length > 0) {
        $('.m-input, .m-area').parent().addClass('is-focused has-label');
    }
})


