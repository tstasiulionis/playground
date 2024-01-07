console.log('Test2 Tadas');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1.

console.log('Ex. 1');
for (let i = 0; i < 10; i++) {
	console.log(10 - i);
}

// 2.

console.log('Ex. 2');
console.log('----------');

let totalSpeed = 0;

for (let i = 0; i < 10; i++) {
	let speed = rand(120, 220);
	
	totalSpeed += speed;
}

const avarageSpeed = totalSpeed / 10;

console.log(avarageSpeed);

// 3.

console.log('Ex. 3');
console.log('----------');

let totalFuel = 44;
let lapsTotal = 0;

for (let i = 0; i < 10; i++) {
	let fuel = rand(3, 6);
	
	totalFuel -= fuel;
	
	if (totalFuel <= 0) {
		break;
	}
	
	lapsTotal++;
}

if (lapsTotal == 10) {
	console.log('10 laps completed, left fuel:', totalFuel, 'l');
} else {
	console.log(`Only ${lapsTotal} laps completed`);
}

// 4.

console.log('Ex. 4');
console.log('----------');

let minSpeed = 120;

for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 5; j++) {
		let turnSpeed = rand(20, 120);
		
		if (turnSpeed < minSpeed) {
			minSpeed = turnSpeed;
		}
	}
}

console.log(minSpeed);

// 5.

console.log('Ex. 5');
console.log('----------');

let kmCount = 0;
let success = 1;

do {
	let cangaroo = rand(0, 1);
	let turn = rand(0, 1);
	let slowDown = rand(0, 1);
	
	if (cangaroo == 1 && turn == 1 && slowDown == 1) {
		success = 0;
	}
	
	kmCount++
	
} while (success !== 0)
	
console.log('KM total:', kmCount);