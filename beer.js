function beer() {
	console.log("How many bottles?");
	var count = prompt();
	while (count > 0) {
		if (count > 2) {
			console.log(count + ' bottles of beer on the wall. ' + count + ' bottles of beer.');
			console.log('Take one down, pass it around ...');
			console.log((count - 1) + ' bottles of beer on the wall');
			count--;
		}
		else if (count === 2) {
			console.log(count + ' bottles of beer on the wall. ' + count + ' bottles of beer.');
			console.log('Take one down, pass it around ...');
			console.log('One bottle of beer on the wall.');
			count--;
		}
		else if (count === 1) {
			console.log('One bottle of beer on the wall. One bottle of beer!');
			console.log('Take one down, pass it around ...');
			console.log('No more bottles of beer on the wall!');
			count--;
		}
	}
}