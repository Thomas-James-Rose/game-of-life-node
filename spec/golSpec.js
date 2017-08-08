describe('Game', function (){
	var evolve = require('../script/gol')().evolve;
	// 0 represents a dead cell
	// 1 represents a living cell

	it('can evolve an inital empty grid', function(){
		console.log("TEST 1")

		var initialState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('can evolve a grid with the mid-row cells alive', function(){
		console.log("TEST 2")

		var initialState = [
			[0,0,0],
			[1,1,1],
			[0,0,0]
		];

		var resultState = [
			[0,1,0],
			[0,1,0],
			[0,1,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('can evolve a grid with the mid-row cells alive twice', function(){
		console.log("TEST 3")

		var initialState = [
			[0,0,0],
			[1,1,1],
			[0,0,0]
		];

		var resultState = [
			[0,0,0],
			[1,1,1],
			[0,0,0]
		];

		expect(evolve(evolve(initialState))).toEqual(resultState);
	});

	it('can evolve a grid with a more unusual distribution of live cells', function(){
		console.log("TEST 4")

		var initialState = [
			[1,0,0],
			[0,1,1],
			[1,1,0]
		];

		var resultState = [
			[0,1,0],
			[0,0,1],
			[1,1,1]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});

	it('can evolve a non-square (but still rectangular) grid', function(){
		console.log("TEST 5")

		var initialState = [
			[0,1,1,1,1],
			[0,0,0,0,1],
			[0,0,0,0,1]
		];

		var resultState = [
			[0,0,1,1,1],
			[0,0,1,0,1],
			[0,0,0,0,0]
		];

		expect(evolve(initialState)).toEqual(resultState);
	});
});