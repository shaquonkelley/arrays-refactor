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
console.log("-----Tests for Exercise One-----");
let fridge = ["milk", "cheese", "eggs", "broccoli", "spinach", "chicken", "leftovers"];
console.log("* Check for milk");
console.log(fridgeContains(fridge, "milk"));
console.log("* Check for chicken");
console.log(fridgeContains(fridge, "chicken"));
console.log("* Check for missing item");
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
console.log("-----Tests for Exercise Two-----");
let fridge2 = ["milk", "cheese", "eggs", "broccoli", "spinach", "chicken", "leftovers"];
console.log("* Add existing item");
putItemIntoFridge(fridge2, "milk")
console.log(fridge2.length == 7 && fridge2.includes("milk"));

console.log("* Add new item");
let previousLength = fridge2.length;
putItemIntoFridge(fridge2, "kale");
console.log(fridge2.length == previousLength + 1 && fridge2.includes("kale"));

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
console.log("-----Tests for Exercise Three-----");
let fridge3 = ["milk", "cheese", "eggs", "broccoli", "spinach", "chicken", "leftovers"];
console.log("* Get the cheese");
let lengthBeforeGettingMilk = fridge3.length;
let milk = getItemFromFridge(fridge3, "milk")
console.log(milk == "milk" && fridge3.length == lengthBeforeGettingMilk - 1 && !fridge3.includes("milk"));

console.log("* Get missing item");
let lengthBeforeMissingItem = fridge3.length;
let item = getItemFromFridge(fridge3, "eggplant");
console.log(fridge3.length == lengthBeforeMissingItem && item == null && !fridge3.includes("eggplant"));

console.log("* Get from empty fridge");
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

    Write the code for the getItemFromNewFridge() and putItemIntoNewFridge() functions.
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
    for (let index in fridge) {
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
    let fridge = [["egg", "egg", "egg", "egg"], ["butter"], ["milk"], ["cheese", "cheese"]];
*/

/*
    getItemFromNewFridge

    If an item exists in the fridge, remove it and return the item.
    If that was the last of that item, remove the empty array for that item.
    If the item isn't in the fridge, return null.
*/
function getItemFromNewFridge(fridge, item) {
    // Your code here.
}

/*
    putItemInNewFridge

    If there are already similar items in the fridge, add this item to their array.
    Otherwise, create a new array in the fridge and put this item in it.
*/
function putItemInNewFridge(fridge, item) {
    // Your code here.
}


/*
   -------END OF YOUR CODE-----------------------------------------------------------
*/

/*
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/

console.log("-----Tests for Exercise Four - getItemFromNewFridge-----");
let newFridge = [["egg", "egg", "egg", "egg"], ["butter"], ["milk"], ["cheese", "cheese"]];
console.log("* Get a cheese");
let lengthBeforeGettingCheese = newFridge.length;
let cheeseArrayLengthBeforeGettingCheese = newFridge[3].length;
let cheese = getItemFromNewFridge(newFridge, "cheese");
console.log(cheese == "cheese" && newFridge.length == lengthBeforeGettingCheese && newFridge[3].length == cheeseArrayLengthBeforeGettingCheese - 1);

console.log("* Get the last milk");
let lengthBeforeGettingLastMilk = newFridge.length;
let milkArrayLengthBeforeGettingLastMilk = newFridge[2].length;
let lastMilk = getItemFromNewFridge(newFridge, "milk");
console.log(lastMilk == "milk" && newFridge.length == lengthBeforeGettingLastMilk - 1 && getIndexOfItem(newFridge, "milk") == -1);

console.log("* Get a missing item");
let lengthBeforeGettingLeftovers = newFridge.length;
let leftovers = getItemFromNewFridge(newFridge, "leftovers");
console.log(leftovers == null && newFridge.length == lengthBeforeGettingLeftovers && getIndexOfItem(newFridge, "leftovers") == -1);


console.log("-----Tests for Exercise Four - putItemInNewFridge-----");
console.log("* Add an egg");
let lengthBeforeAddingEgg = newFridge.length;
let eggArrayLengthBeforeAdding = newFridge[0].length;
putItemInNewFridge(newFridge, "egg");
console.log(newFridge.length == lengthBeforeAddingEgg && newFridge[0].length == eggArrayLengthBeforeAdding + 1);

console.log("* Add a new item");
let lengthBeforeAddingNewItem = newFridge.length;
putItemInNewFridge(newFridge, "yogurt");
console.log(newFridge.length == lengthBeforeAddingNewItem + 1 && getIndexOfItem(newFridge, "yogurt") > -1 && newFridge[getIndexOfItem(newFridge, "yogurt")].length == 1);

console.log("* Get a missing item");
let lengthBeforeGettingMissingItem = newFridge.length;
let missingItem = getItemFromNewFridge(newFridge, "leftovers");
console.log(missingItem == null && newFridge.length == lengthBeforeGettingMissingItem && getIndexOfItem(newFridge, "leftovers") == -1);
