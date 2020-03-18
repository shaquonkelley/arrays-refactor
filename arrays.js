/*
    Arrays Practice

    In these exercises your refridgerator is going to be represented an array.

    let fridge = ["milk", "cheese", "butter"];
    
    Each element of the array is an item in your fridge.

    Complete the Following Exercises.

*/

/* ------------------------------------------------
    Exercise One

    Checking if you have something in the fridge
*/

function fridgeContains(fridge, item) {
    // Your code here.  Check if the item is in the fridge, return true or false.
    return false;
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("Tests for Exercise One");
let fridge = ["milk", "cheese", "eggs", "broccoli", "spinach", "chicken", "leftovers"];
console.log("Check for milk");
console.log(fridgeContains(fridge, "milk"));
console.log("Check for chicken");
console.log(fridgeContains(fridge, "chicken"));
console.log("Check for missing item");
console.log(!fridgeContains(fridge, "eggplant"));

/* ------------------------------------------------
    Exercise Two

    Putting something in the fridge

    Put the item into the fridge.
    If the fridge already contains the item, don't add another!
    Hint: That means you will have to check if an item is in the fridge first!
*/

function putItemIntoFridge(fridge, item) {
    // Your code here.
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("Tests for Exercise Two");
let fridge = ["milk", "cheese", "eggs", "broccoli", "spinach", "chicken", "leftovers"];
console.log("Add existing item");
putItemIntoFridge(fridge, "milk")
console.log(fridge.length == 7 && fridge.includes("milk"));

console.log("Add new item");
let previousLength = fridge.length;
putItemIntoFridge(fridge, "kale");
console.log(fridge.length == previousLength + 1 && fridge.includes("kale"));

/* ------------------------------------------------
    Exercise Three

    Taking something out of the fridge

    After you take something out of the fridge, then the fridge no longer contains that item.

    Given the name of an item, 
    if it exists in the fridge then remove it and return the item
    if it doesn't exist in the fridge, then return null;
*/

function getItemFromFridge(fridge, item) {
    // Your code here.
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("Tests for Exercise Three");
let fridge = ["milk", "cheese", "eggs", "broccoli", "spinach", "chicken", "leftovers"];
console.log("Get the cheese");
let lengthBeforeGettingMilk = fridge.length;
let milk = getItemFromFridge(fridge, "milk")
console.log(milk == "milk" && fridge.length == lengthBeforeGettingMilk - 1 && !fridge.includes("milk"));

console.log("Get missing item");
let lengthBeforeMissingItem = fridge.length;
let item = getItemFromFridge(fridge, "eggplant");
console.log(fridge.length == lengthBeforeMissingItem && item == null && !fridge.includes("eggplant"));

console.log("Get from empty fridge");
let emptyFridge = [];
let emptyItem = getItemFromFridge(emptyFridge, "eggplant");
console.log(emptyFridge.length == 0 && item == null);

/* ------------------------------------------------
    Exercise Four

    A more complex fridge.

    You bought a new fridge, and this fridge allows you to store multiple copies of each item!
    Every type of item in your fridge is represented by an array.  So your fridge works like
    a two-dimensional array.
    
    The fridge comes with a helper function, getIndexOfItem()
    Use this function to know what index the array of any particular item is.
    
    For example, given the following fridge:
    
    let fridge = [["juice"], ["egg", "egg", "egg", "egg"], ["butter"], ["milk"];
    
    If you want to access an "egg", then you can do:
    
    let eggIndex = getIndexOfItem(fridge, "egg");
    
    This will set the index variable to 1
    Then to access the egg array, do:

    let eggArray = fridge[eggIndex];

    This will assign ["egg", "egg", "egg", "egg"] to the egg array.
    Then you can interact with it the same way you did from Exercise three.

    Write the code for the getItemFromFridge() and putItemIntoFridge() functions.
*/

/*
   -------START OF GIVEN CODE - DO NOT EDIT ------------------------------------
   But do read through through this code.  Try to understand what it's doing.
*/

/*
    getIndexOfItem
    given an item and a fridge, this returns the index of that item within the fridge
    If the fridge does not contain that item, it will return -1. 
 */
function getIndexOfItem(fridge, item) {
    for (let index of fridge) {
        if (fridge[index].length > 0 && fridge[index][0] == item) {
            return index;
        }
    }
    return -1;
}
/*
   -------END OF GIVEN CODE - DO NOT EDIT ------------------------------------
*/

/* 
   -------START OF YOUR CODE-----------------------------------------------------------

    example fridge:
    let fridge = [["egg", "egg", "egg", "egg"], ["butter"], ["milk"], ["]];
*/

/*
    getItemFromFridge

    If an item exists in the fridge, remove it and return the item.
    If that was the last of that item, remove the empty array for that item.
    If the item isn't in the fridge, return null.
*/
function getItemFromFridge(fridge, item) {
    // Your code here.
}

/*
    putItemInFridge

    If there are already similar items in the fridge, add this item to their array.
    Otherwise, create a new array in the fridge and put this item in it.
*/
function putItemInFridge(fridge, item) {
    // Your code here.
}
/*
   -------END OF YOUR CODE-----------------------------------------------------------
*/

/*
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
