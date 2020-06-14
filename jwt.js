const crypto = require('crypto');

function jwtFunction() { 
 var x= crypto.createCipher('aes-128-cbc', 'mypassword');
 var myname = x.update('dilip','utf8', 'hex')
 myname += x.final('hex')
	console.log(myname);
	var y= crypto.createDecipher('aes-128-cbc', 'mypassword');
	var myname1 = y.update('14150dd219baf1bc3b83ba7b5047f029', 'hex' ,'utf-8')
	myname1 += y.final('utf-8');
	console.log(myname1);
}
jwtFunction();