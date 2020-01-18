
if(sessionStorage.getItem("loggedInUserAsAdmin")==null )
{ 
    location.href="login.html";
}

if(localStorage.getItem("usersInfo")==null)
{
    document.getElementById("userSession").innerHTML="No any User Activity";
}
else
{
    usersInfo=JSON.parse(localStorage.usersInfo);
    for(var i=0 ; i<usersInfo.length ; i++)
        {
            var row=userSession.insertRow();
            var cell1=row.insertCell();
            var cell2=row.insertCell();
            var cell3=row.insertCell();
            cell1.innerHTML=usersInfo[i].name;
            cell2.innerHTML=usersInfo[i].loggedInTime;
            cell3.innerHTML=usersInfo[i].logoutTime;   
        } 
}