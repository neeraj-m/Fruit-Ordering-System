// array of objects
const fruits = [
    { id: 1, type: "Banana",      name: "Conchita Bananas" },
    { id: 2, type: "RedApple",   name: "Red star apple" },
    { id: 3, type: "GreenApple", name: "Green diamond" },
    { id: 4, type: "Melon",       name: "Havanna sugar melone" },
];

let currentOrderNumber = 0;
let currentOrder;
let orders = [];

// Return fruit by whichever key
// i.e. key = "id", key = "type", or key = "name"
// and value = "Banana", etc
function findFruitByKey(key, value) {
    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i][key] === value) {
            return fruits[i];
        }
    }
    return null;
}

function addToOrder(type, quantity) {
    let item = findFruitByKey("type", type);

    if (item != null) {
        if (quantity > 0) {
            currentOrder[item.id] += quantity;
            console.log("Added " + quantity + " " + item.type + "\'s to this order.")
        } else {
            console.log("Invalid quantity entered. Please try again.")
        }
    } else {
        console.log(type + " is not a valid fruit type string.")
        console.log("Type showFruitTypes() in the console to get all valid fruit types")
    }
}

function removeFromOrder(type, quantity) {
    let item = findFruitByKey("type", type);

    if (item != null) {
        if (quantity > 0) {
            if ((currentOrder[item.id] - quantity) >= 0) {
                currentOrder[item.id] -= quantity;
                console.log("Removed " + quantity + " " + item.type + "\'s from this order.")
            }  else {
                console.log("There are less than the number of items you requested to remove on the current order list. Please try again.")
                console.log("HINT: Type printCurrentOrder() in the console to get all the current order list and values.")
            }
        } else {
            console.log("Invalid quantity entered. Please try again.")
        }
    } else {
        console.log(type + " is not a valid fruit type string.")
        console.log("HINT: Type showFruitTypes() in the console to get all valid fruit types")
    }
}


function newOrder() {
    if (currentOrderNumber != 0) {
        orders.push(currentOrder);
    }

    currentOrderNumber++;
    currentOrder = new Order(currentOrderNumber);
}

function printCurrentOrder() {
    console.log("-- CURRENT ORDER #" + currentOrderNumber + " --");
    for (var i = 1; i<=4; i++) {
        if (currentOrder[i] > 0) {
            let item = findFruitByKey("id", i);
            console.log(currentOrder[i] + " " + item.type + '(s)');
        }
    }
}


function showFruitTypes() {
    console.log('The available fruit types are:');
    console.log('Banana, RedApple, GreenApple, Melon.');
    console.log('NOTE: You must use only these exact fruit types.');
}
