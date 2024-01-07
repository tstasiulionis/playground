console.log('arrays');

const superFarm = [
    { animal:'Cow', weight: 500 },
    { animal:'Chicken', weight: 3 },
    { animal:'Pig', weight: 100 },
    { animal:'Cow', weight: 400 },
    { animal:'Chicken', weight: 2 },
    { animal:'Cow', weight: 600 }
];

let weight = 0;

superFarm.forEach(animal => weight += animal.weight);

console.log(weight);

let farmObj = {'Cows':0,'Chickens':0,'Pigs':0,};

superFarm.forEach(animal => {
	if (animal.animal == 'Cow') {
		farmObj['Cows'] += animal.weight;
	} else if (animal.animal == 'Chicken') {
		farmObj['Chickens'] += animal.weight;
	} else if (animal.animal == 'Pig') {
		farmObj['Pigs'] += animal.weight;
	}
});

console.log(farmObj);

const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'pink',
    'purple',
    'orange'
];

let isBlack = 'No';

colors.forEach(color => color == 'black' ? isBlack = 'Yes' : false);

console.log(isBlack);

let isPink = 'No';

colors.forEach(color => color == 'pink' ? isPink = 'Yes' : false);

console.log(isPink);

// 12.04

const farm = [
    { name: 'Moo', type: 'cow' },
    { name: 'Oink', type: 'pig' },
    { name: 'Cluck', type: 'chicken' },
    { name: 'Neigh', type: 'horse' },
    { name: 'Baa', type: 'sheep' },
    { name: 'Meow', type: 'cat', color: 'black' },
    { name: 'Woof', type: 'dog' },
    { name: 'Moo', type: 'cow' },
    { name: 'Oink', type: 'pig' },
    { name: 'Cluck', type: 'chicken' },
    { name: 'Neigh', type: 'horse' },
    { name: 'Baa', type: 'sheep' },
    { name: 'Meow', type: 'cat', color: 'white' },
    { name: 'Woof', type: 'dog' },
    { name: 'Moo', type: 'cow' },
    { name: 'Oink', type: 'pig' },
    { name: 'Cluck', type: 'chicken' },
    { name: 'Neigh', type: 'horse' },
    { name: 'Baa', type: 'sheep' },
    { name: 'Meow', type: 'cat', color: 'brown' },
    { name: 'Woof', type: 'dog' },
    { name: 'Moo', type: 'cow' },
    { name: 'Oink', type: 'pig' },
    { name: 'Cluck', type: 'chicken' },
    { name: 'Neigh', type: 'horse' },
    { name: 'Baa', type: 'sheep' },
    { name: 'Meow', type: 'cat', color: 'white and black' },
    { name: 'Woof', type: 'dog' },
    { name: 'Moo', type: 'cow' },
    { name: 'Oink', type: 'pig' },
    { name: 'Cluck', type: 'chicken' },
    { name: 'Neigh', type: 'horse' },
    { name: 'Baa', type: 'sheep' },
    { name: 'Meow', type: 'cat', color: 'tricolor' },
    { name: 'Woof', type: 'dog' },
    { name: 'Moo', type: 'cow' }
];

let catsNdogs = farm.filter(item => item.type == 'cat' || item.type == 'dog');

console.log(catsNdogs);

let noPigs = farm.filter(item => item.type != 'pig');

console.log(noPigs);

const findCatColor = farm.find(item => item.type == 'Beaver')?.color

let catsArr = farm.find(item => item.type == 'cat');

let catCount = 0;

const secondCat = farm.find(item => item.type == 'cat' && ++catCount == 2);


let arrCount = 0;

let catsDogs10 = farm.filter(item => (item.type == 'cat' || item.type == 'dog') && ++arrCount <= 5);

console.log(catsDogs10);

const animals = [
    {name: 'Fancy', species: 'dog', age: 5},
    {name: 'Poncho', species: 'dog', age: 10},
    {name: 'Tom', species: 'cat', age: 3},
    {name: 'Jerry', species: 'cat', age: 1},
    {name: 'Bella', species: 'dog', age: 12},
    {name: 'Charlie', species: 'dog', age: 8},
    {name: 'Max', species: 'cat', age: 7}
];

const sumOfAnimals = animals.reduce((sum, item) => sum + item.age, 0);

let h1 = document.querySelector('h1');

let insideH1 = '';

for (let i = 0; i < h1.innerHTML.length; i++) {
	
	insideH1 += `<span>${h1.innerHTML[i]}</span>`;
	
}

h1.innerHTML = insideH1;

let span = document.querySelectorAll('span');

span.forEach(item => {
	item.style.display = 'inline-block'
	item.style.transform = 'rotate(120deg)'; 
});



console.log(h1);

