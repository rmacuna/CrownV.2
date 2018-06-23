$(document).ready(function() {
    var lastTarget;
    $('.cr.modal .close-action').click(function() {
        var target = $(this).attr('data-target');
        $(target).css({
            'transition': 'opacity 0.3s ease-out',
            'opacity': '0'
        })
        $("#md-ovrl-state").css({
            'transition': 'opacity 0.3s ease-out',
            'opacity': '0'
        })

        setTimeout(function() {
            $(target).removeClass('mod-show-state');
            $(target).unwrap();
            $('body').removeClass('has-modal');
            $(target).removeAttr('style');
        }, 350)
    })
    $('[trigger]').click(function() {
        var modal = $(this).attr('trigger');
        lastTarget = modal;
        var elem = $('<div id="md-ovrl-state"class="mdovrl"></div>');
        $(modal).addClass('mod-show-state').wrap($(elem))
        setTimeout(function() {
            $('body').addClass('has-modal');
        }, 350)
    })
    $('.cr.modal i.close').click(function() {
        var modal = $("#md-ovrl-state .cr.modal")
        $(modal).css({
            'transition': 'opacity 0.3s ease-out',
            'opacity': '0'
        })
        $("#md-ovrl-state").css({
            'transition': 'opacity 0.3s ease-out',
            'opacity': '0'
        })
        setTimeout(function() {
            modal.removeClass('mod-show-state');
            modal.unwrap();
            $('body').removeClass('has-modal');
            modal.removeAttr('style');
        }, 350)
    })
    $(document).click(function(e) {
        e.preventDefault();
        if ($('body').hasClass('has-modal')) {
            if ($(e.target)[0] == $("#md-ovrl-state")[0]) {
                var modal = $("#md-ovrl-state .cr.modal")
                $(modal).css({
                    'transition': 'opacity 0.3s ease-out',
                    'opacity': '0'
                })
                $("#md-ovrl-state").css({
                    'transition': 'opacity 0.3s ease-out',
                    'opacity': '0'
                })
                setTimeout(function() {
                    modal.removeClass('mod-show-state');
                    modal.unwrap();
                    $('body').removeClass('has-modal');
                    modal.removeAttr('style');
                }, 350)
            }

        }
    })
});

(function($) {

    $.fn.modal = function(action) {
        if (action == 'show') {
            var elem = $('<div id="md-ovrl-state"class="mdovrl"></div>');
            $(this).addClass('mod-show-state').wrap($(elem))
            setTimeout(function() {
                $('body').addClass('has-modal');
            }, 350)
        } else if (action == 'hide') {
            var modal = $("#md-ovrl-state .cr.modal")
            $(modal).css({
                'transition': 'opacity 0.3s ease-out',
                'opacity': '0'
            })
            $("#md-ovrl-state").css({
                'transition': 'opacity 0.3s ease-out',
                'opacity': '0'
            })
            setTimeout(function() {
                modal.removeClass('mod-show-state');
                modal.unwrap();
                $('body').removeClass('has-modal');
                modal.removeAttr('style');
            }, 350)
        } else {
            throw new Error("Invalid args passed to the function. Valid args (Show and Hide)")
        }
        // Apply options
        return this;
    };

}(jQuery));