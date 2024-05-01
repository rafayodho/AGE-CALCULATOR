const birthdateInput = document.getElementById('birthdate');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', calculateAge);

function calculateAge() {
	const birthdate = new Date(birthdateInput.value);
	const today = new Date();
	const age = today.getFullYear() - birthdate.getFullYear();
	const months = today.getMonth() - birthdate.getMonth();
	if (months < 0 || (months === 0 && today.getDate() < birthdate.getDate())) {
		age--;
	}
	resultParagraph.textContent = `You are ${age} years old.`;
}