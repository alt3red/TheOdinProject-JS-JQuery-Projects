
$(document).ready(function() {

var digit = [];
var equation = []; 
var numsForScreen = [];
var result = 0; 

function addTo(num1,num2) {
	return num1 + num2; 
}

function subtract (num1,num2) {
	return num1 - num2; 
}

function divide (num1,num2) {
	return num1 / num2; 
}

function multiply (num1,num2) {
	return num1 * num2; 
}

//append individual digits to screen 
function buttonClick() {
	var text = $(this).text(); 
	    digit.push(text);
	    numsForScreen.push(text);
	    return numsForScreen.length < 0 ? $('#screen').val(numsForScreen) : $('#screen').val(numsForScreen.join('')); 
}

// clear screen and digit array
function clearClick() {
	$('#screen').val(''); 
	digit = [];
	numsForScreen = [];
}

// append operator to screen
function operatorClick() {
	 consolidateDigits();
	 var text = $(this).text(); 
	 	 equation.push(text); 
	     numsForScreen.push(text);
	 $('#screen').val(numsForScreen.join(''));
}

//consolidate indivd. nums and join with operator 
var consolidateDigits = function() {
	var nums = parseFloat(digit.join(''));
	equation.push(nums);  
	digit = []; 
}

// return value of calculation
function equalClick() {
	consolidateDigits();
		
	for (var i = 0; i < equation.length; i++) {
		 var num1 = parseFloat(equation[i-1]);
		 var num2 = parseFloat(equation[i+1]);

		if (equation[i] === '+') {  result = addTo(num1,num2);    }
		if (equation[i] === '-') {  result = subtract(num1,num2); }
		if (equation[i] === '*') {  result = multiply(num1,num2); }
		if (equation[i] === '/') {  result = divide(num1,num2);   }
	}
   $('#screen').val(result); 
}

$('.digit').click(buttonClick); 
$('.operator').click(operatorClick); 
$('#clear').click(clearClick);
$('#equal').click(equalClick); 

});
