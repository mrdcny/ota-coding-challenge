function StringScramble(str1, str2) {
	let result: boolean = true;
	const str1Arr = str1.split("");
	const str2Arr = str2.split("");
	const mapStr1: Map<string, number> = new Map();
	const mapStr2: Map<string, number> = new Map();

	// initialize map with str1 values
	str1Arr.map((str: string) => {
		let val = mapStr1.get(str) || 0;
		mapStr1.set(str, ++val);
	});
	// initialize map with str2 values
	str2Arr.map((str: string) => {
		let val = mapStr2.get(str) || 0;
		mapStr2.set(str, ++val);
	});
	//logic for comparing string scramble
	str2Arr.forEach((str: string) => {
		const mapStr1Val = mapStr1.get(str);
		const mapStr2Val = mapStr2.get(str);

		if (mapStr1Val !== mapStr2Val) result = false;
	});
	return result;
}

// keep this function call here
// @ts-ignore
console.log(StringScramble(readline()));
