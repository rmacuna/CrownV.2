$(document).ready(function() {
    var radiocount = 0;
    var radiogroup = $(".radio.group")
    if (radiogroup.lenght != 0) {
        var inputs = $(".radio.group input");
        inputs.on('click', function(e) {
            inputs.each(function(i, elem) {
                if (elem.checked == true && e.target != elem) {
                    elem.checked = false;
                }
                radiocount = 0;
            })
        })
    }
})