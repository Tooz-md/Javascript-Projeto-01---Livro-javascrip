// Create variables for the welcome message
var greeting = 'Howdy';
var name = ' Molly'
var message = ', please check your order:';

// Concatenar três varíaveis para criar uma mensagem de boas-vindas
var welcome = greeting + name + message;

// Criar varíaveis com mais detalhes de entrada

var sign = 'Montague House';
var tiles = sign.length
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Pegar elementos HTML atráves de um id

var el = document.getElementById('greeting');
el.textContent = welcome; //pegar o conteúdo do elemento para a criação de uma mensagem personaliza

//Pegar elementos HTML atráves de uma id

var elSing = document.getElementById('userSing');
elSing.textContent = sign;

//Pegar elementos atráves de uma id

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Pegar elementos atráves de uma id
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Pegar elementos atráves de uma id
var elShipping = document.getElementById('shipping');
elShipping.textContent = "$" + shipping;

//Pegar elementos atráves de uma id
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
