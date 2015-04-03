
$(document).ready(function() {
/*
var board = {
    this.size = 3; 
	this.render = render(size); 
	this.currUser = currUser; 
}
*/ 

function render(size) {
	var $board = $('#board'); 
	var column = [];
	for (var i = 0; i < size.length; i++) {
		 column[i] = $board.append('div').addClass('.row');  
		 for (var j = 0; j < size; j++) {
		 	  column[i][j] = $board.append('div').addClass('.square');  
		 }
 	   }
 	   return column; 
    }

/*
board.prototype.rotate = function(currUser) {
	return (currUser === 'playerO') ? 'O' : 'X'; 
}


board.prototype.game_over = function() {
	// how to determine if the game is over?
}
*/ 

render(3); 

});

// render function that creates the board 
// function rotate that rotates whose turn it is (i.e. what symbol to use)
// currUser and then if (currUser === 'X') change to 'O' to rotate 
// click on a div to have the appropriate symbol show up 
// append X or O to div via data attribute 
// if three symbols in a row are the same, end game 
// if there are no more squares, end game 
