var waiting = false;
(function($) {
    var toastQueue = new Array();
    var times = new Array();
    $.toast = function(options) {
        // Default options
        var settings = $.extend({
            message: "I'm a toast",
            actionButton: false,
            actionMessage: "UNDO",
            dismiss: false,
            timeout: 2000,
            onAction: $.noop
        }, options);

        var snack = $("<section class='snackbar'></div>")
        var message = $("<content>" + settings.message + "</content>")
        snack.append(message)
        toastQueue.push(snack)
        times.push(settings.timeout)
        while (toastQueue.length > 0 && times.length > 0 && !waiting) {
            showAppendElement(toastQueue.shift(), times.shift())
        }

        function showAppendElement(elem, time) {
            var action;
            waiting = true;
            if (settings.actionButton) {
                if (settings.dismiss) {
                    action = $("<span class='action undo'>" + settings.actionMessage + "</span>");
                    action.on('click', function(e) {
                        e.preventDefault();
                        elem.addClass('hide')
                    })
                    elem.append(action)
                } else {
                    action = $("<span class='action'>" + settings.actionMessage + "</span>");
                    if ($.isFunction(settings.onAction)) {
                        action.on('click', settings.onAction)
                    } else {
                        throw new Error("The argument passed is not a function. ")
                    }
                    elem.append(action)
                }
            }
            $('body').append(elem)
            if (time == 'infinite' && settings.actionButton) {
                action.on('click', function() {
                    elem.addClass('hide')
                    setTimeout(function() {
                        elem.remove();
                        waiting = false;
                        if (toastQueue.length > 0 && times.length > 0) { showAppendElement(toastQueue.shift(), times.shift()) }
                    }, (300 + 100))

                })
            } else {
                if (!elem.hasClass('hide')) {
                    setTimeout(function() {
                        elem.addClass('hide')
                    }, time)
                }
                setTimeout(function() {
                    elem.remove();
                    waiting = false;
                    if (toastQueue.length > 0 && times.length > 0) { showAppendElement(toastQueue.shift(), times.shift()) }
                }, (time + 200))
            }

        }
    };
}(jQuery));