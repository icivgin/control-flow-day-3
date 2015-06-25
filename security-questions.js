var securityQuestions = [
{question: 'How old are you?', expectedAnswer: 15},
{question: 'Where are you from?', expectedAnswer: 'Chicago'}, 
{question: 'In which month is your birthday?', expectedAnswer: 'March'}
];

function ask() {
    var i = 0;
	while (i < 3) {
		var answer = prompt(securityQuestions[i].question);
		if (answer == securityQuestions[i].expectedAnswer) {
			i++;
		}
		else {
			alert('Access denied. Please try again.');
			break;
		}
	}
	if (i === 3) {
		alert('Welcome back!');
	}
}