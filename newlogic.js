// maxFontInGraphX:
// Consumes the text to be drawn
// Sets the font to the maximum that can
// be drawn in the graph.
// Produces the x position for it to be 
// drawn at.
function maxFontInGraphX(text, font){
	var size = 100;
	
	var textWidth = 1000;
	do {
		ctx.font = size + "px " + font;
		textWidth = ctx.measureText(text).width;
		size -= 5;
	} while (textWidth > graph.width-graph.width*0.15);
	var centerX = Math.round(canvas.width/2);
	return centerText(text, centerX);
}

// Returns a random integer from 0 to the number given
function randInt(max){
	return Math.round(Math.random() * (max-1));
}

// Produces the value of the cell at the position given.
// Returns -1 if there is no cell there.
function getCellValue(x, y){
	var val = -1;
	for(var i=0;i<memory_array.length;i++){
		var cell = memory_array[i];
		if(cell.x == x && cell.y == y){
			val = cell.value;
		}
	}
	return val;
}

// Produces the (x or y) position for the given cell number.
// And the given (cellWidth or cellHeight)
function getCellPos(pos, length, added){
	return pos*length + added;
}

// Produces either the cell width or height
// for the current graphsize
// and number of cells in the x or y direction.
function getCellDimension(dim, xory){
	var evalString = "Math.round(graph." + dim + 
					"/CELLS_" + xory + ");";
	return eval(evalString);
}

function getNums(){
	var string = window.location.search;
	var nums = "";
	for(var i=0;i<string.length;i++){
		if(i>0){
		console.log(i, nums);
		nums += string[i];	
		}
	}
	nums = parseInt(nums);
	if(nums){
		return nums;
	} else {
		return 5;
	}
}



