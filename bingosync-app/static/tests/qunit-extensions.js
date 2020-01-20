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

    QUnit.assert.elementsAre = function(actuals, assertion, expecteds) {
        var assert = this;
        assert.strictEqual(actuals.length, expecteds.length);
        for (var i = 0; i < actuals.length && i < expecteds.length; i++) {
            assertion(actuals[i], expecteds[i]);
        }
    };

    QUnit.assert.outerHtmlEquals = function(actual, expected) {
        var assert = this;
        var actualHtml = (actual.outerHTML) ? actual.outerHTML : actual;
        var expectedHtml = (expected.outerHTML) ? expected.outerHTML : expected;
        assert.strictEqual(actualHtml, expectedHtml);
    };

    // speed up tests by default by reducing responseTime to 10ms from 500ms
    $.mockjaxSettings.responseTime = 10;
    // print deeper diffs
    QUnit.dump.maxDepth = 10;
})();
