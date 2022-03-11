var str='';

function string5(arr)
{

    if(arr.length==0)
    return str;

    for(var i=0;i<arr.length;i++)
    {
      str=str+arr[i]+" ";
    }

    return str;
}

module.exports.string5=string5;