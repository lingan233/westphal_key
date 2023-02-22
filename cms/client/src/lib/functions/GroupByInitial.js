export function group_by_initial(array) {
	let acc;
	if (!array) {
		return {};
	}

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

	let beforeArr = arr;
	let afterArr = [];
	let tempArr = [];

	while (beforeArr.length > 0) {
		// console.log(beforeArr[0].length, afterArr[afterArr.length]?.length);
		console.log('After Arr', afterArr);
		console.log(tempArr.length + beforeArr[0].length, 'Before Arr', beforeArr);
		if (tempArr.length + beforeArr[0].length < 12 && beforeArr.length > 1) {
			beforeArr[0].forEach((tag) => {
				tempArr.push(tag);
			});
		} else if (beforeArr.length <= 1) {
			afterArr.push(tempArr);
			tempArr = [];
		} else {
			afterArr.push(tempArr);
			tempArr = [];
		}
		beforeArr.shift();
	}

	console.log('Final After Arr', afterArr);

	return afterArr;
}
