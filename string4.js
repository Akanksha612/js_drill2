
var str='';


function string4(a)
{

for(var prop in a)
{
    
 str = str+ a[prop].charAt(0).toUpperCase()+ a[prop].substring(1).toLowerCase()+" ";

}

return str;

}


module.exports.string4=string4;