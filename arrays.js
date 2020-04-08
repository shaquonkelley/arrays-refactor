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
let fridge = ["milk", "cheese", "eggs", "broccoli", "spinach", "chicken", "leftovers"];
function fridgeContains(fridge, item) {

    if (fridge.includes(item)) {
        return true
    }
    return false;
}
/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise One-----");
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
let fridge2 = ["milk", "cheese", "eggs", "broccoli", "spinach", "chicken", "leftovers"];
let previousLength = fridge2.length;

function putItemIntoFridge(fridge, item) {

    if (fridge.includes(item)) {
        console.log("That is already inside there");
    }
    else {
        fridge.push(item);
    }

    return fridge;
}

/* 
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Two-----");
console.log("* Add existing item");
putItemIntoFridge(fridge2, "milk")
console.log(fridge2.length == 7 && fridge2.includes("milk"));

console.log("* Add new item");
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

        if (fridge.includes(item)) {
            fridge.splice(fridge.indexOf(item), 1);
        }
        else {
            return null;
        }

    return item;
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


function getIndexOfItem(fridge, item) {
    for (let index in fridge) {
        if (fridge[index].length > 0 && fridge[index][0] == item) {
            return index;
        }
    }
    return -1;
}


function getItemFromNewFridge(fridge, item) {
    // no need to set value to null. You can always declare a variable and it will be set to undefined until you set it's value later.
    let answer = "null";
    let lengthy = fridge.length;
    //index is off when subtracting 1. Working with indexes of arrays can be weird. Try to stay consistent with how you use the >= and <=.
    //Also the sign needs to be flipped on the middle condition for your loop. Right now we will never enter the loop since i is never greater than lengthy.
    for (let i=0; i>lengthy-1; i++) {
        //work on better variable names. Variable names should be as descriptive as possible along with being as concise as possible. A variable name frideItem would make more sense.
        let tempThing = fridge[i];

        if (tempThing.includes(item)) {
            //Make sure to look at the docs for your splice method. The next line should be used to remove the element. When removing an element with splice you should only have 2 parameters not 3.
            //The 3rd parameter will try to add that as a replacement element for the one you deleted.
            fridge = fridge.splice(i, 1, tempThing);
            answer = item;
        }
        // The if statement below is not needed. You can make a similar if statement as a nested if-statement in the one you made above on line 178. check out my version for the diff.
        if (tempThing.length < 1 || tempThing === undefined || tempThing === null) {
            fridge = fridge.filter(e => e.length);
        }
    }

    return answer;
}


let newFridge = [["egg", "egg", "egg", "egg"], ["butter"], ["milk"], ["cheese", "cheese"]];
console.log("* Get the last milk");
let lengthBeforeGettingLastMilk = newFridge.length;
let milkArrayLengthBeforeGettingLastMilk = newFridge[2].length;
let lastMilk = getItemFromNewFridge(newFridge, "milk");
console.log(lastMilk);
console.log(lastMilk == "milk" && newFridge.length == lengthBeforeGettingLastMilk - 1 && getIndexOfItem(newFridge, "milk") == -1);

/*
    putItemInNewFridge

    If there are already similar items in the fridge, add this item to their array.
    Otherwise, create a new array in the fridge and put this item in it.
*/
function putItemInNewFridge(fridge, item) {
    let match = 0;

    for (let i in fridge) {

        if (fridge[i].includes(item)) {
            match = 576876;
            let newArray = [fridge[i]];
            newArray.push(item);
            almostFridge = fridge.splice(i, 1, newArray);
            lastFridge = item;
        }
    }



    if (match === 0) {

        let litArray = [];
        litArray.push(item);
        beforeResult = fridge.push(litArray);
        lastFridge = beforeResult;

    }
    

    return lastFridge;
}


let newFridge = [["egg", "egg", "egg", "egg"], ["butter"], ["milk"], ["cheese", "cheese"]];

/*
   -------END OF YOUR CODE-----------------------------------------------------------
*/

/*
   -------TESTS---------------------------------------------------------------
   Run these commands to make sure you did it right. They should all be true.
*/

console.log("-----Tests for Exercise Four - getItemFromNewFridge-----");
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
