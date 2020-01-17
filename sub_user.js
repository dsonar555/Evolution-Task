loggedUser=JSON.parse(sessionStorage.loggedInSubUser);
document.getElementById('user').innerHTML="Welcome " + loggedUser.name;
date=new Date(loggedUser.birthDate);
// console.log(loggedUser.birthDate.slice(4,2));
// var month=parseInt( loggedUser.birthDate.slice(5,2) );
var birthmonth=date.getMonth();
var birthdate=date.getDate();
if( birthdate== new Date().getDate() && birthmonth== new Date().getMonth() )
{
    document.getElementById('birthday_msg').innerHTML=" HAPPY BIRTHDAY !";
}
else
{
    document.getElementById('birthday_msg').innerHTML= " birthday is on : "+birthdate + " - "+(birthmonth+1);
}
// console.log(typeof loggedUser.birthDate);