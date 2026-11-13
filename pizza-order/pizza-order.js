/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice1(pizza, ...extras) {
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

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
	throw new Error('Remove this line and implement the function');
}
