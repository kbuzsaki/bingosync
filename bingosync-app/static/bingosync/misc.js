
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
};

$.fn.toHtml = function() {
    return $(this).wrapAll('<div>').parent().html();
};

$.escapeHtml = function(json) {
    if(json.constructor === Array) {
        for(var i = 0; i < json.length; i++) {
            json[i] = $.escapeHtml(json[i]);
        }
        return json;
    }
    else if(json.constructor === Object) {
        for(var key in json) {
            json[key] = $.escapeHtml(json[key]);
        }
        return json;
    }
    else if(json.constructor === String) {
        return $("<div>").text(json).html();
    }
};

