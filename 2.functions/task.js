function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];

		if (element > max) {
			max = element;
		}

		if (element < min) {
			min = element;
		}
		sum += element;
	}

	let avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;

}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let difference = max - min;
	return difference;

}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOdderElement = 0;
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];

		if (element % 2 === 0) {
			sumEvenElement += element;
		} else {
			sumOdderElement += element
		}
	}
	let difference = sumEvenElement - sumOdderElement;
	return difference;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (element % 2 === 0) {
			sumEvenElement += element;

			countEvenElement += 1;
		}
	}
	let averegeEvenElement = sumEvenElement / countEvenElement;
	return averegeEvenElement;

}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}