
function draw_grid(x,y) { 
	var grid = ' ';
	for (var i = 0; i < y; i++) {
		grid += '<div class="row">';
		for (var j = 0; j < x; j++) {
			grid += '<div class="cell" id="' + j + '-' + i + '"></div>';	
			}
		grid += '</div>'
		}
