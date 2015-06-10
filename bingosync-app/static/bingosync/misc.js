
$.fn.getClasses = function() {
    var classes = {};
    var class_attr = $(this).attr('class');
    if(class_attr !== undefined) {
        $(class_attr.split(' ')).each(function() { 
            if (this !== '') {
                classes[this] = this;
            }    
        });
    }
    return classes;
}

