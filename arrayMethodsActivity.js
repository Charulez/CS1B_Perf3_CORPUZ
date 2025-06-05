// CORPUZ CHARLES ADRIAN
//BSCS-1B

// joining two arrays using concat
var arr1 = ["Cecile", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var allNames = arr1.concat(arr2);
console.log(allNames);

// adding "Kiwi" using push
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// adding 4 and 5 at the start using unshift
var array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);

// removing last fruit using pop
fruits.pop();
console.log(fruits);

// removing first number using shift
var array2 = [1, 2, 3];
array2.shift();
console.log(array2);

// sorting fruits alphabetically
fruits.sort();
console.log(fruits);

// slicing part of fruits
var someFruits = fruits.slice(1, 3);
console.log(someFruits);

// using splice to change months
var months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // add "Feb" at index 1
console.log(months);
months.splice(4, 1, "May"); // replace "June" with "May"
console.log(months);