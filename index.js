//forEach FUNCTION Iterates over the collection of elements, passing each element in turn to the callback function. Returns the original, unmodified, collection.
function myEach(collection, callback){
//declare a variable to hold an array, this will be passed to the callback 
let arrayForCallback; 

    if (Array.isArray(collection)){
        //if the collection is an array use it as is but store it in our array variable
        arrayForCallback = collection; 
    } else if (typeof collection === 'object'){
        //if the collection is an object use Object.values to store the values in our array variable
        arrayForCallback = Object.values(collection); 
    } 
//use a for loop to iterate over our array variable and pass each value into the callback argument
for (let i = 0; i < arrayForCallback.length; i++){
    callback(arrayForCallback[i]); 
}
// return the original collection from the argument
return collection
}

//map FUNCTION Produces a new array of values by mapping each value in collection through a transformation function, callback. Returns the new array without modifying the original.
function myMap(collection, callback){
//declare a variable to hold an array, this will be passed to the callback 
let arrayForCallback; 

    if (Array.isArray(collection)){
        //if the collection is an array use it as is but store it in our array variable
        arrayForCallback = collection; 
    } else if (typeof collection === 'object'){
        //if the collection is an object use Object.values to store the values in our array variable
        arrayForCallback = Object.values(collection); 
    } 
// initialize a new empty array to keep the values returned from passing each element of our array into the callback function
let newArray = []; 
//use a for loop to iterate over our array variable and pass each value into the callback argument
for (let i = 0; i < arrayForCallback.length; i++){
    newArray.push(callback(arrayForCallback[i])); 
}
return newArray
}

//reduce Function iterates through a collection of values and boils it down into a single value. acc (short for accumulator) starts at the value that's passed in as an argument,
// and with each successive step is updated to the return value of callback. If a start value is not passed to myReduce, the first value in the collection should be used as the start value.
function myReduce(collection, callback, acc) {
    let arrayForCallback;

    if (Array.isArray(collection)) {
        arrayForCallback = collection;
    } else if (typeof collection === 'object') {
        arrayForCallback = Object.values(collection);
    }

    // Set initial accumulator value if not provided
    if (acc === undefined && arrayForCallback.length > 0) {
        acc = arrayForCallback[0];
        // Start iteration from index 1
        for (let i = 1; i < arrayForCallback.length; i++) {
            acc = callback(acc, arrayForCallback[i], i, collection);
        }
    } else {
        for (let i = 0; i < arrayForCallback.length; i++) {
            acc = callback(acc, arrayForCallback[i], i, collection);
        }
    }

    return acc;
}

//find Function Looks through each value in the collection, returning the first one that passes a truth test (predicate) or undefined if no value passes the test. 
//The function should return as soon as it finds an acceptable element, without traversing the rest of the collection.
function myFind(collection, predicate){
//declare a variable to hold an array, this will be passed to the callback 
let arrayForCallback; 

    if (Array.isArray(collection)){
        //if the collection is an array use it as is but store it in our array variable
        arrayForCallback = collection; 
    } else if (typeof collection === 'object'){
        //if the collection is an object use Object.values to store the values in our array variable
        arrayForCallback = Object.values(collection); 
    } 
    
    for (let element of arrayForCallback){
        if (predicate(element)){
            return element
        }
    }
    return undefined
}

//filter Function Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). If no matching values are found, it should return an empty array.
function myFilter(collection, predicate){
    let arrayForCallback; 

    if (Array.isArray(collection)){
        //if the collection is an array use it as is but store it in our array variable
        arrayForCallback = collection; 
    } else if (typeof collection === 'object'){
        //if the collection is an object use Object.values to store the values in our array variable
        arrayForCallback = Object.values(collection); 
    } 
    //initialize an empty array to either return or fill with the values passing the truth test
    let returnArray = [];

    for (let element of arrayForCallback){
        if(predicate(element)){
            returnArray.push(element);
        }
    }
    return returnArray
}

//size Function returns the number of values in the collection.
function mySize(collection){
    let arrayForCallback; 

    if (Array.isArray(collection)){
        //if the collection is an array use it as is but store it in our array variable
        arrayForCallback = collection; 
    } else if (typeof collection === 'object'){
        //if the collection is an object use Object.values to store the values in our array variable
        arrayForCallback = Object.values(collection); 
    } 

    return arrayForCallback.length
}

//first Function returns the first element of an array. Passing n will return the first n elements of the array.
function myFirst(array, integer){
    //initialize array for return
    let returnArray = []; 
    //if there is no integer given as an argument return the first element of the array
    if (integer === undefined){
        returnArray = array[0]; 
    } else {
     //if there is an integer given as an argument return the array at a length of the integer
        for (let i = 0; i <= integer - 1; i++){
        returnArray.push(array[i]);
        }
    }
    return returnArray
}

//last Function returns the last element of an array. Passing n will return the last n elements of the array.
function myLast(array, integer){
    //initialize array for return
    let returnArray = []; 
    //if there is no integer given as an argument return the last element in the array
    if (integer === undefined){
        let lengthOf = array.length - 1; 
        returnArray = array[lengthOf]
    } else {
    //if there is an integer given as an argument return the last n elements of the array 
    //declare the startIndex for the for loop
        let startIndex = array.length - integer;  
        for (let i = startIndex; i < array.length; i++){
            returnArray.push(array[i]); 
        }
    }

    return returnArray
}

//keys Function retrieves all the names of the object's enumerable properties.
function myKeys(object){
    //initialize an empty array to store all the keys of the object
    let arrayOfKeys = []; 
    //use a for loop to access the keys in the object and push each to the arrayOfKeys
    for (let key in object){
        arrayOfKeys.push(key); 
    }
    return arrayOfKeys
}

//values Function returns all of the values of the object's properties.
function myValues(object){
    //initialize an empty array to store all the values of the object 
    let arrayOfValues = []; 
    //use a for loop to access the keys in the object and push each value to the arrayOfValues
    for (let key in object){
        let value = object[key]; 
        arrayOfValues.push(value); 
    }
    return arrayOfValues;
}