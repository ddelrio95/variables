// Working with variables //
var quantity;
var price;
var total;

price = 5;
quantity = 3;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;