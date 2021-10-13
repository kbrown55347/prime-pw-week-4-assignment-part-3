console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []

console.log('Testing empty array:', basket);

function addItem(item) {
  basket.push(item);
  return true;
}

console.log('Item added?', addItem('broccoli'));
console.log('Item added?', addItem('apples'));
console.log('Item added?', addItem('cookies'));
console.log('What is in my basket now?', basket);

function listItems() {
  for (i=0; i<basket.length; i++) {
    console.log('Item in my basket:', basket[i]);
  }
}

listItems();

function empty() {
  for (i=0; i=basket.length; i++) {
    basket.pop();
  }
  console.log('My basket is now empty:', basket);
}

empty();
