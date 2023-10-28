//  Practice 3.1
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.

// let shoppingList = ["Milk", "Bread", "Apples"];
// console.log("List length:", shoppingList.length);
// var indexToReplace = shoppingList.indexOf("Bread");
// if (indexToReplace !== -1) {
//   shoppingList[indexToReplace] = "Bananas";
// }
//   console.log("Updated Shopping List:", shoppingList);


// practice 3.2 

// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.
// 11. Your final list should look like this:

// var shoppingList = [];
// shoppingList.push("Milk", "Bread", "Apples");

// var breadIndex = shoppingList.indexOf("Bread");
// if (breadIndex !== -1) {
//     shoppingList.splice(breadIndex, 1, "Bananas", "Eggs");
// }

// var removedItem = shoppingList.pop();
// console.log("Removed item:", removedItem);
// shoppingList.sort();

// var milkIndex = shoppingList.indexOf("Milk");
// console.log("Index of Milk:", milkIndex);

// var bananasIndex = shoppingList.indexOf("Bananas");
// if (bananasIndex !== -1) {
//     shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");
// }

// var newList = ["Juice", "Pop"];
// shoppingList = shoppingList.concat(newList, newList);

// var popIndex = shoppingList.lastIndexOf("Pop");
// console.log("Last index of Pop:", popIndex);

// console.log("Final Shopping List:", shoppingList);


// Practice exercise 3.3

// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.

var originalArray = [1, 2, 3];
var nestedArray = [originalArray, originalArray, originalArray];

console.log(nestedArray[1][1]); 