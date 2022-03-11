const obj= require('../string1.js');

var str ="$100.45";



if(str.charAt(0)=='-')
console.log('-$',obj.string1(str));

else
console.log('$',obj.string1(str));