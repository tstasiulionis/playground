function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1.

let digit1_ex1 = rand(1, 6);
let digit2_ex1 = rand(1, 6);

let sum_ex1 = digit1_ex1 + digit2_ex1;

let result_ex1 = sum_ex1 > 8 
	? `Laimėjimas! Jūs išridenote ${digit1_ex1} ir ${digit2_ex1} kauliukus!` 
	: `Dėja pralošėte, išridenti kauliukai: ${digit1_ex1} ir ${digit2_ex1}.`;
	
console.log(result_ex1);

// 2.

let pilkis = rand(3, 6);
let murklys = rand(3, 6);

if (pilkis > murklys && pilkis !== murklys) {
	console.log(`Murklys yra lengvesnis už Pilkį, jis sveria tik  ${murklys}kg`);
} else if (pilkis < murklys && pilkis !== murklys) {
	console.log(`Pilkis yra lengvesnis už Murklį, jis sveria tik  ${pilkis}kg`);
}else if (pilkis === murklys) {
	console.log(`Abu katinukai sveria tiek pat, jų svoris: ${pilkis}kg`);
}

// 3.

let katinukai = rand(0, 30);
let karves = rand(0, 30);

if (katinukai <= 15 && karves <= 15) {
	console.log('Telpa');
} else {
	console.log('Netelpa');
}

// 4.

let kauliukas = rand(1, 6);

if (kauliukas === 1 || kauliukas === 5) {
	console.log('Pirkti televizorių.');
} else if (kauliukas === 3 || kauliukas === 4) {
	console.log('Pirkti skalbimo mašiną.');
} else {
	console.log('Pirkti šaldytuvą.');
}

// 5.

let digit1_ex5 = rand(1, 7);
let digit2_ex5 = rand(1, 7);
let digit3_ex5 = rand(1, 7);

console.log(digit1_ex5, digit2_ex5, digit3_ex5);

let first;
let second;
let third;

if (digit1_ex5 < digit2_ex5 && digit1_ex5 < digit3_ex5) {
	first = digit1_ex5;
} else if (digit2_ex5 < digit1_ex5 && digit2_ex5 < digit3_ex5) {
	first = digit2_ex5;
} else if (digit3_ex5 < digit1_ex5 && digit3_ex5 < digit2_ex5) {
	first = digit3_ex5;
}

if (digit1_ex5 === first) {
	if (digit2_ex5 < digit3_ex5) {
		second = digit2_ex5;
		third = digit3_ex5;
	}else {
		second = digit3_ex5;
		third = digit2_ex5;
	}
}else if(digit2_ex5 === first) {
	if (digit1_ex5 < digit3_ex5) {
		second = digit1_ex5;
		third = digit3_ex5;
	}else {
		second = digit3_ex5;
		third = digit1_ex5;
	}
}else if(digit3_ex5 === first) {
	if (digit1_ex5 < digit2_ex5) {
		second = digit1_ex5;
		third = digit2_ex5;
	}else {
		second = digit2_ex5;
		third = digit1_ex5;
	}
}


console.log(first, second, third);