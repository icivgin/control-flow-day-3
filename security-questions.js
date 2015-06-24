var securityQuestions = [{question: 'How old are you?', exAnswer: 15},{question: 'Where are you from?', exAnswer: 'Chicago'}, {question: 'In which month is your birthday?', exAnswer: 'March'}];

function ask() {
    var i = 0;
	while (i < 3) {
	    console.log(securityQuestions[i].question);
		var answer = prompt();
		if (answer == securityQuestions[i].exAnswer) {
			i++;
		}
		else {
			console.log('Access denied. Please try again.');
			break;
		}
	}
	if (i === 3) {
		console.log('Welcome back!');
	}
}