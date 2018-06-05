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

(function ($) {
    
})(jQuery);
