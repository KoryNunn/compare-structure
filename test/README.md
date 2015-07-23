# compare-structure

compare the structure of two objects

## Usage

pass an object, and a comparison object:

```
    var someObject = {
        foo: {
            bar: 3
        },
        baz: { // <------- Additional structure, will pass normal comparison.
            majigger: 1
        }
    };

    var expectedStructure = {
        foo:{
            bar: null
        },
        baz: null
    };

    compare(someObject, expectedStructure); // -> true
```

You can optionally pass `true` as the third parameter to fail if the structure contains additional keys/objects:

```
    var someObject = {
        foo: {
            bar: 3
        },
        baz: { // <------- Additional structure, will fail a strict comparison.
            majigger: 1
        }
    };

    var expectedStructure = {
        foo:{
            bar: null
        },
        baz: null
    };

    compare(someObject, expectedStructure, true); // -> false
```