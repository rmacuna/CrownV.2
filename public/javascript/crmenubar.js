$(document).ready(function(){
	$('.toggle.menu').click(function(){
		var whichTarget = $(this).attr('toogle')
		if (whichTarget.length == 0) {
			throw new Error('Toggle attr is null or empty.')
		}else if (whichTarget.charAt(0) != "#"){
			throw new Error('Missing #')
		}else{
		}
	})
})