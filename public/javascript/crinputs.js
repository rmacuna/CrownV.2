$(document).ready(function() {
    var arr = $('.cr-material.with.counter > .m-field').toArray()
    arr.forEach(function (elem, i ) {
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