module.exports = function compare(target, comparator, exact){
    if(!comparator || typeof comparator !== 'object'){
        return true;
    }

    if(
        !target || typeof target !== 'object' ||
        exact && Object.keys(target).length !== Object.keys(comparator).length
    ){
        return false;
    }

    for(var key in comparator){
        if(comparator[key] && typeof comparator[key] === 'object'){
            if(!compare(target[key], comparator[key])){
                return false;
            }
        }else if(
            exact &&
            (!(key in target) || (target[key] && typeof target[key] === 'object'))
        ){
            return false;
        }
    }

    return true;
}