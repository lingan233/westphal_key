export function group_by_initial(array) {
	let acc;
	if (!array) {
		return {};
	}

	array = array.sort();

	acc = array.reduce((acc, tag) => {
		let firstChar = tag[0].toLowerCase();
		if (!acc[firstChar]) {
			acc = { ...acc, [firstChar]: [tag] };
		} else {
			acc[firstChar] = [...acc[firstChar], tag];
		}
		return acc;
	}, {});

	let arr = Object.keys(acc).map((key) => {
		return acc[key];
	});

	let beforeArr = arr; //copy of original array
	let afterArr = []; //the array that will get returned, containing multiple arrays that represents the tags in each div
	let tempArr = []; //

	while (beforeArr.length > 0) {
		if (tempArr.length + beforeArr[0].length <= 12 && beforeArr.length > 1) {
			console.log('new', beforeArr[0]);
			beforeArr[0].forEach((tag) => {
				tempArr.push(tag);
			});
			console.log('temp', tempArr);
		} else if (beforeArr.length == 1 && tempArr.length + beforeArr[0].length <= 12) {
			beforeArr[0].forEach((tag) => {
				tempArr.push(tag);
			});
			afterArr.push(tempArr);
			console.log('PUSH');
		} else {
			afterArr.push(tempArr);
			console.log('PUSH');
			tempArr = [];
			console.log('new', beforeArr[0]);
			beforeArr[0].forEach((tag) => {
				tempArr.push(tag);
			});
			console.log('temp', tempArr);
		}
		console.log('NEXT');
		beforeArr.shift();
	}

	console.log('Final After Arr', afterArr);

	return afterArr;
}
