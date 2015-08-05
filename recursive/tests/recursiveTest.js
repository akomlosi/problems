var assert = require('chai').assert,
    Recursive = require('../libs/recursive');

suite('test project', function() {
    setup(function() {
    });

    test('test runs', function() {
        assert.isFunction(Recursive);
    });

    teardown(function() {
    });
});