console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []

console.log(`Testing empty array, this should be blank: ${basket}`);

function addItem(item) {
  basket.push(item);
  return true;
}

console.log(`Item added? ${addItem('broccoli')}`);
console.log(`Item added? ${addItem('apples')}`);
console.log(`Item added? ${addItem('cookies')}`);
console.log(`What is in my basket now? ${basket}`);

function listItems() {
  for (i=0; i<basket.length; i++) {
    console.log(`Item(s) in my basket: ${basket[i]}`);
  }
}

listItems();

function empty() {
  for (i=0; i=basket.length; i++) {
    basket.pop();
  }
  console.log(`My basket is now empty so this should be blank: ${basket}`);
}

empty();

/// Stretch Goals

// #1

const maxItems = 5;

// #2

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}

console.log(`Basket full? ${isFull()}`);

// #3

addItem = function(item) {
  if (isFull() === false) {
    basket.push(item);
    return true;
  } else {
    return `${false}, basket is full`;
  }
}

console.log(`Item added? ${addItem('bananas')}`);
console.log(`Item added? ${addItem('cucumbers')}`);
console.log(`Item added? ${addItem('pickles')}`);
console.log(`Item added? ${addItem('bread')}`);
console.log(`Item added? ${addItem('gum')}`);
console.log(`Item added? ${addItem('pumpkins')}`);
console.log(`Basket now holds: ${basket}`);
