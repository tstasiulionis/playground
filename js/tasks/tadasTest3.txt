console.log('Test3 Tadas');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];


// 1.

bitGirls.unshift('Nauseda');

console.log(bitGirls);

// 2.

const bitCats = cats.map(item => {
	const weight = rand(2,6);
	const fat = rand(0,1) == 1 ? true : false;
	
	return [item, weight, fat];
});

console.log(bitCats);

// 3.

const initialVal = 0;

const catFunc = (start, catFat) => {
	let catCount = 0
	if (catFat == true) {
		catCount++
	}
	
	return start + catCount;
};

const fatCatsTotal = bitCats.reduce((a, cat) => 
catFunc(a, cat[2]),initialVal
);

console.log(fatCatsTotal);

// 4.

bitCats.sort((a, b) => {
  const nameA = a[0][1]; // ignore upper and lowercase
  const nameB = b[0][1]; // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(bitCats);

