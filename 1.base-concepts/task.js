"use strict"

function solveEquation(a, b, c) {
	let discrim = b ** 2 - 4 * a * c;
	let arr = [];

	if (discrim < 0) {
		return arr;
	} else if (discrim === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else {
		let root1 = (-b + Math.sqrt(discrim)) / (2 * a);
		let root2 = (-b - Math.sqrt(discrim)) / (2 * a);
		arr.push(root1, root2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = percent / 100 / 12;
	if (isNaN(monthlyPercent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let sum = monthlyPayment * countMonths;
	sum = Number(sum.toFixed(2));
	return sum;
}