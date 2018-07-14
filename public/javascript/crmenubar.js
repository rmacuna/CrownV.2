$(document).ready(function() {
    $("")
    $('.toggle.menu').click(function() {
       var target = $(this).attr('toggle')
        if ($(this).attr('active') == null) {
            if (target == null) {
                throw new Error('Toggle attr is null or empty.')
            } else if (target.charAt(0) != "#") {
                throw new Error('Missing #')
            } else {
                $(target).addClass('cr_sideNav_show_state')
                $(this).attr('active', '')
            }
        }else{
        	$(target).removeClass('cr_sideNav_show_state')
        	$(this).removeAttr('active')
        }

    })
})