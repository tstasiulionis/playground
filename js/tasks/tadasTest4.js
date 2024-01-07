function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('test4');

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

// 1.

const btn = document.querySelector('.btn');
const h2s = document.querySelectorAll('h2');

btn.addEventListener('click', _ => {
	console.log('test');
	const num1 = rand(1,6);
	const num2 = rand(1,6);
	
	if (num1 == num2) {
		h2s.forEach(element => element.style.color = 'crimson');
	} else {
		h2s.forEach(element => element.style.color = 'black');
	}
	
	console.log(h2s);
	h2s[0].innerText = num1;
	h2s[1].innerText = num2;
});

// 2.

const btn2 = document.querySelector('.btn2');

const nums = [];


btn2.addEventListener('click', _ => {
	const num = rand(1,10);
	let sum = 0;
	
	nums.push(num);
	console.log(nums);
	
	nums.forEach(item => sum += item);
	console.log(sum);
	
	document.querySelector('h3').innerText = sum;
});

// 3.

const list = document.querySelector('ul');

africa.forEach(item => {
	
	if (item) {
		const newLi = document.createElement("li");
		newLi.innerText = item;
	
		list.appendChild(newLi);
	}
	
});

// 4.

const inputs = document.querySelectorAll('input');

const plusBtn = document.querySelector('.plusBtn');
const minusBtn = document.querySelector('.minusBtn');

plusBtn.addEventListener('click', _ => {
	const num1 = Number(inputs[0].value);
	const num2 = Number(inputs[1].value);
	
	const sum = num1 + num2;
	
	document.querySelector('h5').innerText = sum;
});

minusBtn.addEventListener('click', _ => {
	const num1 = Number(inputs[0].value);
	const num2 = Number(inputs[1].value);
	
	const sum = num1 - num2;
	
	document.querySelector('h5').innerText = sum;
});