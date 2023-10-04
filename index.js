function isObjectArray(collection){
    let array
    if (typeof collection === 'object'){
        array = Object.values(collection)
    } else{
        array = collection
    }
    return array
}

function myEach(collection, callback){
    let array = isObjectArray(collection)
    for (let x = 0; x < array.length; x++) {
        callback(array[x])
    }
    return collection
}

function myMap(collection, callback){
    let array = isObjectArray(collection)

    for (let x = 0; x < array.length; x++) {
        array[x] = callback(array[x])
    }

    return array
}

function myReduce(collection, callback, acc){
    let array = isObjectArray(collection)
    let agregate, index;
    if(!acc){
        agregate = array[0]
        index = 1
    }else {
        agregate = acc
        index = 0
    }

    for (let x = index; x < array.length; x++) {
        agregate = callback(agregate,array[x]);
    }
    return agregate
}

function myFind(collection, predicate){
    let array = isObjectArray(collection)
    for (let x = 0; x < array.length; x++) {
        if( predicate(array[x]) === true){
            return array[x]
        }
        
    }
    return undefined
}

function myFilter(collection, predicate){
    let array = isObjectArray(collection)
    let filterArray = []
    for (let x = 0; x < array.length; x++) {
        if( predicate(array[x]) === true){
            filterArray.push(array[x])
        }
        
    }
    return filterArray
}

function mySize(collection){
    let array = isObjectArray(collection)
    return array.length
}

function myFirst(array, n = 1){
    let newArray = []
    for (let x = 0; x <= n-1; x++) {
        newArray.push(array[x]); 
    }
    if(newArray.length === 1){
        return newArray[0]
    }
    return newArray
}

function myLast(array, n = 1){
    let newArray = []
    for (let x = array.length - n; x <= array.length -1; x++) {
        newArray.push(array[x]); 
    }
    if(newArray.length === 1){
        return newArray[0]
    }
    return newArray
}

function mySortBy(array, callback){
    
    let sortedArray = [...array]
    return sortedArray.sort(function(a, b) {
        if (callback(a) > callback(b)) {
          return 1;
        } else if (callback(b) > callback(a)) {
          return -1;
        } else {
          return 0;
        }
      });
}

function myKeys(obj){
    const keys = []
    for (const key in obj) {
        keys.push(key)
    }
    return keys
}

function myValues(obj){
    const vals = []
    for (const key in obj) {
        vals.push(obj[key])
    }
    return vals
}