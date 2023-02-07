export function get_all_tags(data) {
	let array = [];

	for (let i = 0; i < data.length; i++) {
		let tag = data[i].attributes.tag;
		array.push(tag);
	}

	return array;
}
