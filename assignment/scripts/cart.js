console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []

console.log(basket);

function addItem(item) {
  basket.push(item);
  return true;
}

console.log('Item added?', addItem('broccoli'));
console.log('Item added?', addItem('apples'));
console.log('Item added?', addItem('cookies'));
console.log(basket);
