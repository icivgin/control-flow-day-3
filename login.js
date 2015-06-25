var userLogin = {name: 'John', password:'fun'};

function login() {
    var i = 0;
    var access = false;
	while (i < 2) {
		var password = prompt ('Enter password for user ' + userLogin.name);
		if (password == userLogin.password) {
			alert('Access Granted');
			access = true;
			break;
		}
		else {
			alert('Access Denied!');
			i++;
		}
	}
    if (!access) {
        var password = prompt ('Enter password for user ' + userLogin.name);
        if (password == userLogin.password) {
            alert('Access Granted');
        }
        else {
            alert('Access Denied! You have tried 3 times, go home!');
            i++;
        }
    }
}