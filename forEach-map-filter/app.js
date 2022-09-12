/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

// This function takes in an array of numbers
function doubleValues(array){
    // this empty array will be where the values for the doubled values are pushed to
    let dblVals = [];
    // This sets up the callback function 
    array.forEach(function(value){
    // This multiplies each value by two and then pushes it into the dblVals array 
    dblVals.push(value * 2);
   });
    // This returns the new array of values doubled from the original array
   return dblVals;
}


/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/

// This function takes in an array of numbers
function onlyEvenValues(array){
    // This is the empty array where the even values will be pushed to
    let evenVals = [];
    // This sets up the callback function 
    array.forEach(function(value){
        // This determines if each value is or is not even
        if(value % 2 === 0){
            // This pushes the even values into the evenVals array
            evenVals.push(value);
        } 
    });
    // This returns the new array of only even values
    return evenVals;
}


/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/

// This function takes in an array of strings
function showFirstAndLast(array){
    // This is the empty array where the first and last letter of each string will be pushed to
    let firstAndLast = [];
    // This sets up the callback function
    array.forEach(function(value){
    // This extracts the first and last letters of each string from the original array and pushes them to the firstAndLast array
    firstAndLast.push(value[0] + value[value.length-1]);
    });
    // This returns the new array of first and last letters
    return firstAndLast;    
}
    

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

// This function takes in an array of objects of key/value pairs, as well as another key and value to add to each object in the array
function addKeyAndValue(array, key, value){
    // This sets up the callback function
    array.forEach(function (arrayValue){ 
        // This adds the key/value pair to each of the objects in the array
       arrayValue[key] = value; 
    });
    // This returns the updated array
    return array;
}


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

// This function takes in a string
function vowelCount(str){
    // This splits the original string into an array of letters
    let stringArray = str.split('');
     // This makes all values in stringArray lower case
    lowerCaseStringArray = stringArray.toLowerCase();
    // This is the object that that will house the key/value pairs (vowel:number of instances) found in the string 
    let object = {};
    // This is defining the collection of letters that we will be comparing each letter of the string to
    const vowels = "aeiou";
    
    //The sets up the callback function 
    LowerCaseStringArray.forEach(function (value){
        // This checks to see if there are vowels present in the stringArray
        if(vowels.indexOf(value) !== -1){
            // If there are vowels present, this makes each vowel a key in the new object
            if(object[value]) {
                // This adds up the instances of each vowel in the string array 
                object[value]++;
            } else {
                // This sets the value of each letter(key) to the number of instances the vowel appeared in the string array
                object[value] = 1;
            }
        }
    });
    // This returns the object of vowel/number pairs 
    return object;
}


/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

// This function takes in an array of numbers
function doubleValuesWithMap(arr) {
    // This sets up the callback function
    arr.map(function(value) {
        // This multiplies each value from the original array and returns them in a new array 
        return value * 2;
    });
}


/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

// This function accepts an array of numbers
function valTimesIndex(arr){
    // This sets up the callback function
    arr.map(function(value){
        // This finds the index of each value and store it in a variable 'index'
        let index = value.indexOf();
        // This multiplies each value by it's index and returns them in a new array;
        return index * value;
    }); 
}


/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

// This function takes in an array of objects containing key/value pairs
function extractKey(arr, key){
    // This sets up the callback function, taking in the value from the original array
    arr.map(function(value){
        // This gets the value of the requested key for each object and returns it in a new array
        return value[key];
    }); 
}


/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

// This function takes in an array of objects of first name : last name  key/value pairs 
function extractFullName(arr){
    // This sets up the callback function, taking in each value in the array of objects
    arr.map(function(value){
        // This is taking the value of the 'first' key, a space, and the value of the "last"  key and concatenating each into an object and then returning the objects in a new array 
        return value[first] + " " + value[last];
    }); 
}



/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

// this function takes in an array and a key
function filterByValue(arr, key) {
    // This sets up the callback fuction, taking in each value in the original array
    arr.filter(function(value){
        // This checks to see if the key we are seeking is in each object in the original array
        if(key in arr){
            // If the key is present, it places that object in a new array and returns it
            return value[key];
        }
    });
}


/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/


function find(arr, searchValue) {
    arr.filter(function (value){
        if(searchValue in arr){
            return searchValue.indexOf;
        } else {
            return undefined;
        }
    });
}


/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    arr.filter(function (value) {
        return value[key] === searchValue;
    });
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

// This function takes in a string 
function removeVowels(str) {
    // This variable defines the values we will be removing from the original string
    const vowels = 'aeiou';
    // This converts all values in the original string to lower case and stores it in a variable
    let lowerCaseString = str.toLowerCase(); 
    // This converts the lowerCaseString into an array and separates each character so that each is its own value
    let lowerCaseArray = lowerCaseString.split("");

    // This sets up the callback function to filter through the lowerCaseArray 
    lowerCaseArray.filter(function (value){
        // This identifies the indexes in the lowerCaseArray that do not contain vowels
        let noVowelsArray = vowels.indexOf(value) === -1;
        return noVowelsArray;
    });
    noVowelsArray.join("");
}  
  

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

// This function takes in an array of numbers
function doubleOddNumbers(arr) {
    // This filters out the odd numbers from the original array and saves them to the variable "oddValuesArray"
    let oddValuesArray = arr.filter(function (value){
        return value % 2 !== 0;
    });
        // This doubles each value of the oddValues array and returns a new array
        oddValuesArray.map(function (value){
            return value * 2;
        });
    
    
}

