var arr= new Array();
var part="";

function string2(str)
{
   
    for(var i=0;i<str.length;i++)
    {
        if(str.charCodeAt(i)<48 || str.charCodeAt(i)>57)
        {
            if(str.charCodeAt(i)!=46)
            {
               return new Array();
            }
        }
    }


  return str.split(".");

 }


module.exports.string2=string2;


























/* for(var i=0;i<str.length;i++)
    {

        if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57 || str.charCodeAt(i)==46)
       {


        if(str.charAt(i)!='.')
        {
            part=part+str.charAt(i);
        }

        else
        {
            arr.push(Number(part));
            part="";
        }

       if(i==str.length-1)
       {
        arr.push(Number(part));
        return arr;

       }


    }//if close

    else
    return new Array();  */