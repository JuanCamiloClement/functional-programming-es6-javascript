const arr = [1, 2, 3, 4, 5, 6];
/*
function duplicate(x) {
    return x*2;
}

arr.map(duplicate);

function even(x) {
    return x % 2 === 0;
}

console.log(arr.filter(even));

function add() {
    let total = 0;
    for (i = 0; i < arr.length; i ++) {
        let element = arr[i];
        total += element;
    }
    return total;
}

console.log(arr.reduce(add,0));
*/

console.log(arr.map(function(x){
    return x*2;
}));

console.log(arr.filter(function(x){
    return x % 2 === 0;
}));

console.log(arr.reduce(function(total,item){
    return total + item;
},0));

