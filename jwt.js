const crypto = require('crypto');
/*
var algorithm  = 'aes256';
var key = 'mypassword';
var name = 'Dilip';
var cipher = crypto.createCipher(algorithm,key);
var encrypted = cipher.update(name,'utf8','hex') + cipher.final('hex');
var decipher = crypto.createDecipher(algorithm,key);
var decrypted = decipher.update(encrypted,'hex', 'utf8') + decipher.final('utf8');

function myFunction(a, b){
    return a + b;
}

var finalOutput = myFunction(encrypted, decrypted);
console.log(finalOutput);
*/
var algorithm  = 'aes256';
var salt = 'mypassword';

function myEncrypt(data){

	var cipher = crypto.createCipher(algorithm,salt);
	var encrypted = cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
    return encrypted;
}

function myDecrypt(encryptString){
	var decipher = crypto.createDecipher(algorithm,salt);
	var decrypted = decipher.update(encryptString,'hex', 'utf8') + decipher.final('utf8');
	return decrypted;
}
var  encryptedData = myEncrypt('dilip');
console.log(encryptedData);
var  decryptedData = myDecrypt(encryptedData);
console.log(decryptedData);