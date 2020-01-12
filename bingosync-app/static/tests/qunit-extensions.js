(function(){
    "use strict";

    // helper for matching $.mockjax's data option
    QUnit.assert.dataJsonEquals = function(expected) {
        var assert = this;
        return function(json) {
            assert.deepEqual(JSON.parse(json), expected);
            return true;
        };
    };

    // speed up tests by default by reducing responseTime to 10ms from 500ms
    $.mockjaxSettings.responseTime = 10;
})();
