let totalSpeed = 0;

function rand(a) {
	return a;
}

for (let i = 0; i < 10; i++) {
	let speed = rand(120, 220);
	
	totalSpeed += speed;
}

const avarageSpeed = totalSpeed / 10;

//console.log(avarageSpeed);


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
	// console.log('10 laps completed, left fuel:', totalFuel, 'l');
} else {
	// console.log(`{lapsTotal}`);
}


console.log('practice');


