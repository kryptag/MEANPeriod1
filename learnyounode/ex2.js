var names = ["hej","ib","hehehe"]
var sum = 0;
for(var i= 2; i < process.argv.length; i++){
    sum += Number(process.argv[i]);
}
console.log(sum);

//array som kun tager navne med ind som er 2 eller mindre i længde
var newArray = names.filter(function(name){
    if(name.length <= 2){
        return true;
    }

});
console.log(newArray);