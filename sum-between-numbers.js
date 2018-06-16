
var arg1 = process.argv[2];
var arg2 = process.argv[3];


function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Min (m,n) {
	var a = Math.min(m, n);
	if (!isInt(a)) {
		var a = Math.ceil(a);
	}
	return a;
}
function Max (m,n) {
	var b = Math.max(m, n);
	if (!isInt(b)) {
		var b = Math.floor(b);
	}
	return b;
}

function isInt(n) {
   return n % 1 === 0;
   console.log(n);
}


function sumBetweenNumbers (a,b) {
	if (isNumeric (a) && isNumeric (b)) {
		var a = + a;
		var b = + b;
		console.log(typeof a);
		console.log(typeof b);

		var sum = 0;
		if (a == b) {
			if (isInt(a)) {
				sum = a;
			} else {
				sum = 0;
			}
		} else {

			for (var i = Min (a,b); i <= Max (a,b); i++) {
				sum = sum + i;
			}
		
		}

		return sum;

	} else {
		console.error("Error: данные введены некорректно (введены не цифры), пожалуйста, проверьте правильность и повторите заново");
		process.exit(1);
	    // throw new Error("Данные некорректны(введены не цифры), пожалуйста, проверьте правильность и повторите заново");
	}
}
console.log(sumBetweenNumbers(arg1,arg2))


