// Array of objects
const fruits = [
    { id: 1, type: "Banana",      name: "Conchita Bananas" },
    { id: 2, type: "RedApple",   name: "Red star apple" },
    { id: 3, type: "GreenApple", name: "Green diamond" },
    { id: 4, type: "Melon",       name: "Havanna sugar melone" },
];

// Define and initialise global variables
let currentOrderNumber = 0;
let orders = [];
let currentOrder;

// Initialise program onLoad
function init() {
    printInstructionsToConsole();
    newOrder();
}

function printInstructionsToConsole() {
    console.log("-----------------------------");
    console.log("FRUIT ORDERING SYSTEM.");
    console.log("Ordering Instructions.\nType one of the following in the console to interact with the ordering system:\n\nnewOrder()\nCreate a new order, which will save and close the previously open order. Note: the first order is created automatically on first loading of the page.\n\naddToOrder(<string>type, <integer>quantity)\nto add any number of 'Banana', 'RedApple', 'GreenApple', or 'Melon' to the current order.\n\nremoveFromOrder(<string>type, <integer>quantity)\nto remove any number of, 'Banana', 'RedApple', 'GreenApple', or 'Melon' from the current order.\n\nprintCurrentOrder()\nprints the full details of the current order for only the fruits ordered.\n\n");
    console.log("Helper Functions:\nType one of the following in the console to get help:\nprintCurrentOrder()\nreturns the full current order list.\n\nshowFruitTypes()\nreturns the specific fruit types available to order.\n\nsaveAndPrintOrderList()\nsaves the current order, and then prints the order list for every order added.\n\n");
    console.log("-----------------------------");
}

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

// Add a positive number of an item to the current order
function addToOrder(type, quantity) {
    let item = findFruitByKey("type", type);

    if (item != null) {
        if (quantity > 0) {
            currentOrder[item.id] += quantity;
            console.log("[INFO] Added " + quantity + " " + item.type + "(s) to this order.")
        } else {
            console.log("[ERROR] Invalid quantity entered. Please try again.")
        }
    } else {
        console.log("[ERROR] " + type + " is not a valid fruit type string.")
        console.log("[INFO] Type showFruitTypes() in the console to get all valid fruit types")
    }
}

// Remove a positive number of an item to the current order
function removeFromOrder(type, quantity) {
    let item = findFruitByKey("type", type);

    if (item != null) {
        if (quantity > 0) {
            if ((currentOrder[item.id] - quantity) >= 0) {
                currentOrder[item.id] -= quantity;
                console.log("[INFO] Removed " + quantity + " " + item.type + "(s) from this order.")
            }  else {
                console.log("[ERROR] There are less than the number of items you requested to remove on the current order list. Please try again.")
                console.log("[INFO] HINT: Type printCurrentOrder() in the console to get all the current order list and values.")
            }
        } else {
            console.log("[ERROR] Invalid quantity entered. Please try again.")
        }
    } else {
        console.log("[ERORR] " + type + " is not a valid fruit type string.")
        console.log("[INFO] HINT: Type showFruitTypes() in the console to get all valid fruit types")
    }
}

// Function to create a new order and add any active order to an array of orders
function newOrder() {
    if (currentOrderNumber != 0) {
        orders.push(currentOrder);
    }

    currentOrderNumber++;
    currentOrder = new Order(currentOrderNumber);
    console.log("[INFO] New Order created");
}

// Output an order to the console
function printCurrentOrder() {
    console.log("ORDER #" + currentOrderNumber);
    for (var i = 1; i<=4; i++) {
        if (currentOrder[i] > 0) {
            let item = findFruitByKey("id", i);
            console.log(currentOrder[i] + " " + item.type + '(s)');
        }
    }
}

// Add the current order to the array of orders and then print all orders to the console.
function saveAndPrintOrderList() {
    orders.push(currentOrder);

    // Reset current order numbers
    currentOrderNumber = 1;
    for (var i=0; i<orders.length; i++) {
        currentOrder = orders[i];
        printCurrentOrder();
        currentOrderNumber++;
    }
}

// Helper function to list all the allowed fruit types to order.
function showFruitTypes() {
    console.log('The available fruit types are:');
    console.log('Banana, RedApple, GreenApple, Melon.');
    console.log('NOTE: You must use only these exact fruit types.');
}
