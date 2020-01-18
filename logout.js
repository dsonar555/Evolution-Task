if(sessionStorage.getItem("loggedInUserAsAdmin")==null && sessionStorage.getItem("loggedInSubUser")== null )
{ 
    location.href="login.html";
}
function logout()
{
    alert("infunction");
    if(sessionStorage.getItem('loggedInSubUser')!=null)
    {
        alert("in if");
        loggedUser=JSON.parse(sessionStorage.loggedInSubUser);
        loggedUser['logoutTime']= new Date();
        if(localStorage.getItem("usersInfo")==null)
        {
            localStorage.setItem( "usersInfo",JSON.stringify(new Array()) );
        }
        usersInfo=JSON.parse(localStorage.usersInfo);
        usersInfo.push(loggedUser);
        localStorage.setItem("usersInfo",JSON.stringify(usersInfo) );
        sessionStorage.removeItem("loggedInSubUser");
        location.href="login.html";
    }
    else if(sessionStorage.getItem('loggedInUserAsAdmin')!=null)
    {
        alert("in else if");
        sessionStorage.removeItem("loggedInUserAsAdmin");
        location.href="login.html";
    }
}