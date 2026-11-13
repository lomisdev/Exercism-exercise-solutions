// let totalPrice = 0;
function pizzaPrice1(pizza, ...extras) {
	if (extras.length <= 0) {
		if (pizza === 'Margherita') {
			return 7;
		} else if (pizza === 'Caprese') {
			return 9;
		} else if (pizza === 'Formaggio') {
			return 10;
		}
	}

	let extraCost = 0;
	if (extras[0] === 'ExtraSauce') {
		extraCost = 1;
	} else if (extras[0] === 'ExtraToppings') {
		extraCost = 2;
	}

	return extraCost + pizzaPrice1(pizza, ...extras.slice(1));
}

console.log(
	pizzaPrice1(
		'Caprese',
		'ExtraToppings',
		'ExtraToppings',
		'ExtraToppings',
		'ExtraToppings',
	),
);

function pizzaPrice(totalPrice, pizza, ...extras) {
	if (extras.length <= 0) {
		if (pizza === 'Margherita') {
			return totalPrice + 7;
		} else if (pizza === 'Caprese') {
			return totalPrice + 9;
		} else if (pizza === 'Formaggio') {
			return totalPrice + 10;
		}
	}
	if (extras[0] === 'ExtraSauce') {
		return pizzaPrice(
			totalPrice + 1,
			pizza,
			...extras.slice(1, extras.length),
		);
	} else if (extras[0] === 'ExtraToppings') {
		return pizzaPrice(
			totalPrice + 2,
			pizza,
			...extras.slice(1, extras.length),
		);
	}
}

console.log(pizzaPrice(0, 'Caprese', 'ExtraSauce', 'ExtraToppings'));
console.log(pizzaPrice(0, 'Caprese', 'ExtraSauce'));
console.log(pizzaPrice(0, 'Margherita'));
console.log(pizzaPrice(0, 'Caprese'));
console.log(pizzaPrice(0, 'Formaggio'));

function pizzaPrice2(pizza, ...rest) {
	let totalPrice = 0;

	for (let i = 0; i < rest.length; i++) {
		if (rest[i] === 'ExtraSauce') {
			totalPrice += 1;
		} else if (rest[i] === 'ExtraToppings') {
			totalPrice += 2;
		}
	}
	if (pizza === 'Margherita') {
		return totalPrice + 7;
	} else if (pizza === 'Caprese') {
		return totalPrice + 9;
	} else if (pizza === 'Formaggio') {
		return totalPrice + 10;
	}
}
console.log(pizzaPrice2('Caprese', 'ExtraSauce', 'ExtraToppings'));
