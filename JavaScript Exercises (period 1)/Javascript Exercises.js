// with "use strict" it will see monkeybiss as a error because the var isnt defined anywhere
// without it wont care and just "skip" the problem all together
//"use strict";
monkeybiss = 10;

var jsArr = ["Lars", "jan","Bo","peter","Freps"];

// longEnough retunere en string hvis den er længere end 3
function longEnough(value){
    return value.length > 3;
}

function upperCased(value){
    return value.toUpperCase();
}
// filter function
function myFirstFilter(arr, callback){
    var tmpArr = [];
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])) tmpArr.push(arr[i]);

    }
    return tmpArr.toString();
}

// map function
function myFirstMap(arr, callback){
    var tmpArr = [];
    for(var i = 0; i < arr.length; i++){
        tmpArr.push(callback(arr[i]));
    }
    return tmpArr.toString();
}
// filter function added to Array
Array.prototype.myFilter = function(callback){
    var arr = this;
    var tmpArr = [];
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])) tmpArr.push(arr[i]);

    }
    return tmpArr.toString();
};

// map function added to Array
Array.prototype.myMap = function(callback){
    var arr = this;
    var tmpArr = [];
    for(var i = 0; i < arr.length; i++){
        tmpArr.push(callback(arr[i]));

    }
    return tmpArr.toString();
}

//--------------------------------------------------
console.log("start Array" + "\n"+ jsArr + "\n" + "--------------------------------------------------");
console.log("if the value is bigger than 3" + "\n" + jsArr.filter(longEnough) + "\n" + "--------------------------------------------------");
console.log("returned as UPPERCASE" + "\n" + jsArr.map(upperCased) + "\n" + "--------------------------------------------------");
//--------------------------------------------------
console.log("my filter function" + "\n" + myFirstFilter(jsArr, longEnough) + "\n" + "--------------------------------------------------");
console.log("my filter added to array objects" + "\n" + jsArr.myFilter(longEnough) + "\n" + "--------------------------------------------------");
console.log("my map function"+ "\n" + myFirstMap(jsArr, upperCased) + "\n" + "--------------------------------------------------");
console.log("my map added to array objects"+ "\n" + jsArr.myMap(upperCased) + "\n" + "--------------------------------------------------");
