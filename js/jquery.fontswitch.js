$(document).ready(function() {

function change_size(element, size) {

    var current = parseInt(element.css('font-size'));

    if (size == 'smaller') {
        var new_size = current - 1;
    } else if (size == 'bigger') {
        var new_size = current + 1;
    }

    element.css('font-size', new_size + 'px');  
}



$('#smaller').click(function() {
    change_size($('p'), 'smaller');
});

$('#bigger').click(function() {
    change_size($('p'), 'bigger');
});

});

function change_family(element, family) {
    console.log('change font family');
    element.css('font-family', family);  
    
}
