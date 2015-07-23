module.exports = function compare(target, comparator, strict){
    if(!comparator || typeof comparator !== 'object'){
        return true;
    }

    if(
        !target || typeof target !== 'object' ||
        strict && Object.keys(target).length !== Object.keys(comparator).length
    ){
        return false;
    }

    for(var key in comparator){
        if(comparator[key] && typeof comparator[key] === 'object'){
            if(!compare(target[key], comparator[key], strict)){
                return false;
            }
        }else if(strict){
            return (key in target) && (!target[key] || typeof target[key] !== 'object');
        }
    }

    return true;
};