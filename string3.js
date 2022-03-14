var part='';

function string3(str)
{

    const arr= str.split("/");
    return arr[1];
   
}

module.exports.string3=string3;





























/*for(var i=0;i<str.length;i++)
{
    if(str.charAt(i)=='/')
    {
        for(var j=i+1;str.charAt(j)!='/';j++)
        {

            part=part+str.charAt(j);
        }

        return Number(part);
    }
}  */