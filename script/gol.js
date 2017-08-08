module.exports = function(){

	/*
		Assumptions:
		- A cell's existing state does not matter if it has three living neighbours as it will be alive regardless
		- The grid will be a perfect rectangle
		- Living grid cells will be represented by a 1 and dead grid cells will be represented by a 0
	*/
	
	function evolve(gridState){
		console.log("Start evolution...");

		// create a copy of the current grid state that can be updated with the new cell values
		var newState = new Array();
		for(var y = 0; y < gridState.length; y++) {
			newState[y] = gridState[y].slice();
		}

		printGrid(gridState, "Start Result");

		// loop through the entire grid
		for(var y = 0; y < gridState.length; y++) {
			for(var x = 0; x < gridState[0].length; x++) {
				var livingNeighbours = getNeighbours(gridState, y, x);
				if(livingNeighbours < 2) newState[y][x] = 0; // Scenario 1: Underpopulation
				if(livingNeighbours > 3) newState[y][x] = 0; // Scenario 2: Overcrowding
				if(livingNeighbours == 2 && gridState[y][x] == 1) newState[y][x] = 1; // Scenario 3: Survival
				if(livingNeighbours == 3) newState[y][x] = 1; // Scenario 4: Creation of life
			}
		}

		printGrid(newState, "End Result");
		console.log("Finished evolution! \n");

		// return the new grid values
		return newState;
	}

	function getNeighbours(gridState, y, x) {
		var livingNeighbours = 0;
		
		// top
		if (y-1 >= 0 && x-1 >= 0) livingNeighbours += gridState[y-1][x-1]; // top left cell
		if (y-1 >= 0) livingNeighbours += gridState[y-1][x]; // top cell
		if (y-1 >= 0 && x+1 < gridState[0].length) livingNeighbours += gridState[y-1][x+1]; // top right cell

		// mid
		if(x-1 >= 0) livingNeighbours += gridState[y][x-1]; // left cell
		if(x+1 < gridState[0].length) livingNeighbours += gridState[y][x+1]; // right cell

		// bottom
		if (y+1 < gridState.length && x-1 >= 0) livingNeighbours += gridState[y+1][x-1]; // bottom left cell
		if (y+1 < gridState.length) livingNeighbours += gridState[y+1][x]; // bottom cell
		if (y+1 < gridState.length && x+1 < gridState[0].length) livingNeighbours += gridState[y+1][x+1]; // bottom right cell

		return livingNeighbours;
	}

	function printGrid(gridState, message) { // debug function
		message = message || "";
		console.log(message);
		for(var y = 0; y < gridState.length; y++) {
			var newLine = "";
			for(var x = 0; x < gridState[0].length; x++) {
				newLine = newLine + gridState[y][x] + " ";
			}
			console.log(newLine);
		}
		console.log("")
	}

	return {
		evolve: evolve
	};
};