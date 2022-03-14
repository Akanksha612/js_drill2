var str1='';

function string1(str)                               
{

if(str.charAt(0)=='-')
{

for(var i=2;i<str.length;i++)
{

   if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57 || str.charCodeAt(i)==46)
   {


if(str.charAt(i)!=',')
str1=str1+str.charAt(i);

   }

   else
   return 0;

}


return Number(str1) *-1 ; 

} //if end

else
{
for(var i=1;i<str.length;i++)
{


   if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57 || str.charCodeAt(i)==46)
   {

if(str.charAt(i)!=',')
str1=str1+str.charAt(i);

   }
   else
   return 0;

}
} //else end

   return Number(str1); 
}

module.exports.string1=string1;


























/* 
    if(str.charCodeAt(i)<48 && str.charCodeAt(i)>57 && str.charCodeAt(i)!=46)
    return 0;    */