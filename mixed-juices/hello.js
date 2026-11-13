function limesToCut(wedgesNeeded, limes) {
	let count = 0;
	let i = 0;

	while (i < limes.length) {
		if (limes[i] === 'small' && wedgesNeeded > 0) {
			wedgesNeeded -= 6;
			count++;
			console.log(count);
			console.log(wedgesNeeded);
		} else if (limes[i] === 'medium' && wedgesNeeded > 0) {
			wedgesNeeded -= 8;
			count++;
			console.log(count);
			console.log(wedgesNeeded);
		} else if (wedgesNeeded > 0) {
			wedgesNeeded -= 10;
			count++;
			console.log(count);
			console.log(wedgesNeeded);
		}
		i++;
	}

	console.log(count);
	console.log(wedgesNeeded);
	return count;
}

limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
