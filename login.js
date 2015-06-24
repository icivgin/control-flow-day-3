var userLogin = {name: 'John', password:'fun'};
function login() {
    var i = 0;
	while (i < 2) {
    	console.log('Enter password for user ' + userLogin.name);
		var password = prompt ();
		if (password == userLogin.password) {
			console.log('Access Granted');
			break;
		}
		else {
			console.log('Access Denied!');
			i++;
		}
	}
	console.log('Enter password for user ' + userLogin.name);
	var password = prompt ();
	if (password == userLogin.password) {
		console.log('Access Granted');
	}
	else {
		console.log('Access Denied! You have tried 3 times, go home!');
		i++;
    }
}