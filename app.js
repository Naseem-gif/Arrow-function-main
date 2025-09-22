

// Use map() to double each number in the array: [1, 2, 3, 4, 5].

// let array = [1, 2, 3, 4, 5];
// const doubleNum = array.map((item) => item * 2 


// )
// console.log(doubleNum);




// 2. Use map() to convert an array of strings to uppercase: ["apple", "banana",
// "cherry"].


// let Fruits = ["apple", "banana", "cherry"];
//  const upper = Fruits.map((item) => item.toUpperCase()  )

//  console.log(upper);
 

// 3. Use map() to extract the names from an array of objects:
// [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}].

// const nameArr = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];

// const extName = nameArr.map((item) => item.name)

// console.log(extName);

 








// 4. Use map() to return the length of each word in the array: ["dog", "elephant",
// "tiger"].


// let animal = ["dog", "elephant", "tiger"];

// const lengthArr = animal.map((item) => item.length)

// console.log(lengthArr);








// 5. Use map() to add a suffix -done to each task in an array: ["task1", "task2",
// "task3"].


// let text = ["task1", "task2", "task3"];

// const textAdd = text.map((i) => i + "-done")
// console.log(textAdd);



// 6. Use map() to square each number in an array: [2, 4, 6, 8].


// let squareNum =  [2, 4, 6, 8];

// const eaachSquare = squareNum.map((i) => i ** 2)

// console.log(eaachSquare);







// // 7. Use map() to convert an array of prices to strings with a $ sign.
// // 



// let signs = [10, 20, 30, 40, 50];

// let convertedPrice = signs.map((i) =>  "$" + i  )


// console.log(convertedPrice);











// 8. Use map() to format an array of dates into readable strings.


// const dates = [
//   new Date("2023-01-15"),
//   new Date("2024-05-22"),
//   new Date("2025-09-21"),
//   new Date("2022-12-31"),
//   new Date("2023-07-04")
// ];


// let formatedDate = dates.map((i) => i.toDateString())

// console.log(formatedDate);





// 9. Use map() to create an array  of booleans indicating if each number is even.






// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// const isEvenArr = array.map((i) => i % 2 === 0)

// console.log(isEvenArr);











// 10. Use map() to append the index to each string in an array.
// let colors = ["Black", "Blue", "Yellow", "Brown"];
// const appendCol = colors.map((i, index) => i + index)
// console.log(appendCol);







// 11. Use filter() to keep only the even numbers: [1, 2, 3, 4, 5, 6].
// let numbers =  [1, 2, 3, 4, 5, 6];
// const everNum  = numbers.filter((item) => item % 2 === 0);
// console.log(everNum);







// 12. Use filter() to remove all negative numbers from an array: [-3, 4, -1, 7, -5].
// let negNum = [-3, 4, -1, 7, -5];
// const remNegNum = negNum.filter((item) => item > 0);
// console.log(remNegNum);







// 13. Use filter() to get names longer than 4 characters: ["Joe", "Elizabeth",
// "Tom", "Anna"].
// let namesArr = ["Joe", "Elizabeth", "Tom", "Anna"];
// const charName = namesArr.filter((item) => item.length > 4 )
// console.log(charName);









// 14. Use filter() to find all users who are active:
// const users = [
//   { id: 1, name: "Alice", active: true },
//   { id: 2, name: "Bob", active: false },
//   { id: 3, name: "Charlie", active: true },
//   { id: 4, name: "Diana", active: false },
//   { id: 5, name: "Eve", active: true }
// ];


// const activeUser = users.filter((item) => item.active);
// console.log(activeUser);






// 15. Use filter() to get all words starting with the letter "a".
// const words = ["apple", "banana", "avocado", "cherry", "apricot", "blueberry", "almond"];
// const aWords = words.filter((item) => item.startsWith('a'));

// console.log(aWords);






// 16. Use filter() to keep only numbers greater than 10.
// const numberArr = [2, 4, 7, 10, 5, 11, 9, 15];
// const greaterNum = numberArr.filter((item) => item > 10);
// console.log(greaterNum);





// 17. Use filter() to remove all falsy values from an array.
// const mixedValues = [0, "hello", false, 42, "", null, "world", undefined, NaN, true];
// const fitlerValues = mixedValues.filter(Boolean);
// console.log(fitlerValues);







// 18. Use filter() to get strings that include the word "code".
// let strArr = ["hello", "world", "codewars", "JavaScript code", "codecademy", "decode"]
// const codeArr = strArr.filter((item) => item.includes("code"))
// console.log(codeArr);









// 19. Use filter() to exclude null or undefined values.
// let nullUndArr = [10, null, "hello", undefined, 25, "code", null, 50, undefined, "world"]

// const fitleredArr = nullUndArr.filter((item) => item !== null && item !== undefined)

// console.log(fitleredArr);







// 20. Use filter() to return products with price less than 100:
// let products = [
//   { name: "Book", price: 50 },
//   { name: "Pen", price: 20 },
//   { name: "Headphones", price: 80 },
//   { name: "Keyboard", price: 150 },
//   { name: "Mouse", price: 70 },
//   { name: "Shoes", price: 200 }
// ];

// const filterProducts = products.filter((item) => item.price < 100)
// console.log(filterProducts);







// 21. Use reduce() to sum all numbers in an array: [1, 2, 3, 4].
// let numArr = [1, 2, 3, 4];
// const sumArr = numArr.reduce((acc, cval) => {
//     return acc + cval
// }, 0)

// console.log(sumArr);




// 22. Use reduce() to find the maximum number in an array.
// let numArr = [12, 45, 7, 89, 32, 56]

// const maxNum = numArr.reduce((acc, cval) => {
//     return acc > cval ? acc: cval;
// }, 0)

// console.log(maxNum);






// 23. Use reduce() to count how many times each element appears:
let Fruites = ["apple", "banana", "apple", "orange", "banana", "apple"];
const countFruit = Fruites.reduce((acc, cval) => {
    acc[cval] = (acc[cval] || 0) + 1
    return acc
}, {})

console.log(countFruit);









