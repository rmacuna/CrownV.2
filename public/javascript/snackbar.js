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
            timeout: "2000",
            stackMode: false,
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
            if (!settings.stackMode) {
                if (settings.actionButton) {
                    if (settings.dismiss) {
                        action = $("<span class='action undo'>" + settings.actionMessage + "</span>");
                        action.on('click', function(e) {
                            e.preventDefault();
                            console.log("closed")
                        })
                        elem.append(action)
                    } else {
                        action = $("<span class='action'>" + settings.actionMessage + "</span>");
                        if ($.isFunction(onAction)) {
                            action.on('click', onAction)
                        } else {
                            throw new Error("The argument passed is not a function. ")
                        }
                        elem.append(action)
                    }
                }
                $('body').append(elem)
                setTimeout(function() {
                    elem.css({
                        "-webkit-transition": "opacity 0.3s ease-out",
                        "-o-transition": "opacity 0.3s ease-out",
                        "transition": "opacity 0.3s ease-out",
                        "opacity": "0"
                    })
                }, time)
                setTimeout(function() {
                    elem.remove();
                    waiting = false;
                    if (toastQueue.length > 0 && times.length > 0 ) {showAppendElement(toastQueue.shift(),times.shift())}
                }, (parseInt(time) + 200))
            }
        }
    };
}(jQuery));