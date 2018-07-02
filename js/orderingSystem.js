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
// e.g. key = id, or key = type
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
        currentOrder[item.id] += quantity;
        console.log("Added " + quantity + " " + item.type + "\'s to this order.")
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




// function help() {
//     console.log('Help Instructions:')
//     // console.log('')
// }

function showFruitTypes() {
    console.log('The available fruit types are:');
    console.log('Banana, RedApple, GreenApple, Melon.');
    console.log('NOTE: You must use only these exact fruit types.');
}

// must be a positive integer