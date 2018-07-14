$(document).ready(function() {
    $('.toggle.menu').click(function() {
        var target = $(this).attr('toggle')
        if ($(this).attr('active') == null) {
            if (target == null) {
                throw new Error('Toggle attr is null or empty.')
            } else if (target.charAt(0) != "#") {
                throw new Error('Missing #')
            } else {
                $(target).removeClass('cr')
                $(target).addClass('triggering')
                setTimeout(function() {
                	$(target).removeClass('triggering')
                    $(target).addClass('cr_sideNav_show_state')
                    $(this).attr('active', '')
                }, 400)
            }
        } else {
            $(target).removeClass('cr_sideNav_show_state')
            $(this).removeAttr('active')
        }
    })
})