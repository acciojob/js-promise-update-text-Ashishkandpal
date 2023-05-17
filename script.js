//your JS code here. If required.

const output = document.querySelector('#output');

const prom = () => {
	return new Promise((resolve) => setTimeout(resolve('Hello, world!'), 1000));
}

const callIt = async() => {
	const data = await prom();
	output.innerText = data;
}

callIt();