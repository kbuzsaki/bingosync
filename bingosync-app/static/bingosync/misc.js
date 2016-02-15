
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

// Check if the provided function returns true for any member of a jQuery collection
$.fn.any = function(func) {
    if (typeof func !== 'function') {
        return false;
    }
    var any = false;
    $(this).each(function () {
        if (func.call(this)) {
            any = true;
            return false;
        }
    });
    return any;
};

$.fn.toHtml = function() {
    return $(this).wrapAll('<div>').parent().html();
};

$.fn.insertOnce = function($element, predicate) {
    var inserted = false;
    $(this).children().each(function() {
        if(predicate($(this))) {
            console.log("inserting!");
            $element.insertBefore($(this));
            inserted = true;
            return false;
        }
    });

    if(!inserted) {
        $(this).append($element);
    }
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
    else {
        return json;
    }
};


