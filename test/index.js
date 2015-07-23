var test = require('tape'),
    compare = require('../');

test('structure', function(t){
    t.plan(1);

    var x = {
        foo: {
            bar: 3
        },
        baz: {
            majigger: 1
        }
    };

    t.ok(compare(x, {
        foo:{
            bar: null
        },
        baz: null
    }));
});

test('identical structure', function(t){
    t.plan(1);

    var x = {
        foo: {
            bar: 3
        },
        baz: {
            majigger: 1
        }
    };

    t.notOk(compare(x, {
        foo:{
            bar: null
        },
        baz: null
    }, true));
});

test('identical structure 2', function(t){
    t.plan(1);

    var x = {
        foo: {
            bar: 3
        },
        baz: 4,
        majigger: 5
    };

    t.notOk(compare(x, {
        foo:{
            bar: null
        },
        baz: null
    }, true));
});

test('values', function(t){
    t.plan(1);

    var x = 2;

    t.ok(compare(x, 4));
});

test('arrays', function(t){
    t.plan(1);

    var x = [1,2,3];

    t.ok(compare(x, []));
});

test('strict arrays 1', function(t){
    t.plan(1);

    var x = [1,2,3];

    t.notOk(compare(x, [], true));
});

test('strict arrays 2', function(t){
    t.plan(1);

    var x = [1,2,3];

    t.ok(compare(x, [null, null, null], true));
});