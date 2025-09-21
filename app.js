
// Arrow function 

// const greetUser = (username) => {
//     return `Hello ${username}`
// }

// console.log(greetUser("Ibrahim"));





// .....
// const greetUser = username => `Hello ${username}`
// console.log(greetUser("Ibrahim"));



let fruits = ["Apple", "Banana", "Mango", "Orange"];



let person = {
  name: "Ali",
  age: 25,
  city: "Karachi"
};





// for of 

// for (const element of fruits) {
//     console.log(element);
    
// }




// for in 

// for (const key in person) {
   
//     console.log(key + " " + person[key]);
    
// }



// FOR EACH 

// const forArr = fruits.forEach((item, index, fruits) => {
//     // console.log(item, index, fruits);
//     return item
// })
// console.log(forArr);




// const mapARr =  fruits.map((item, index) => {
//   // console.log(item);
//   return item + index 

// })

// console.log(mapARr);



const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];

let productList = document.querySelector(".container")


const getProducts = products.map((products) => {
  productList.innerHTML += `<div class="card">
            <h2>${products.name}</h2>
            <h4>${products.category}</h4>
            <h3>$${products.price}</h3>
        </div>`
})

catArr = []


products.forEach(product => {
    if(!catArr.includes(product.category)){
      catArr.push(product.category)
    }

    
    
  
});
console.log(catArr);






// Filter
// const filteredProducts = products.filter(item => item.category === "Electronics");
// console.log(filteredProducts);



// const filteredProducts = products.filter(i => i.price >=  200);
// console.log(filteredProducts);





    

// const movies = [
//   { title: "Inception", year: 2010, rating: 8.8 },
//   { title: "The Matrix", year: 1999, rating: 8.7 },
//   { title: "Interstellar", year: 2014, rating: 8.6 },
//   { title: "The Godfather", year: 1972, rating: 9.2 },
//   { title: "Parasite", year: 2019, rating: 8.6 },
//   { title: "The Dark Knight", year: 2008, rating: 9.0 },
//   { title: "Fight Club", year: 1999, rating: 8.8 },
//   { title: "Forrest Gump", year: 1994, rating: 8.8 }
// ];


// const recentMovies = movies.filter( (item)=> item.year > 2008 
    
//  )


// console.log(recentMovies);






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
const mixedValues = [0, "hello", false, 42, "", null, "world", undefined, NaN, true];
const fitlerValues = mixedValues.filter((item) => item !== false);
console.log(fitlerValues);


// 18. Use filter() to get strings that include the word "code".
// 19. Use filter() to exclude null or undefined values.
// 20. Use filter() to return products with price less than 100:
// [{name: "Phone", price: 99}, {name: "Tablet", price: 120}].
// 21. Use reduce() to sum all numbers in an array: [1, 2, 3, 4].
// 22. Use reduce() to find the maximum number in an array.
// 23. Use reduce() to count how many times each element appears:
// ["apple", "banana", "apple", "orange", "banana"].





