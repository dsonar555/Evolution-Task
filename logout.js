function logout()
{
    loggedUser=JSON.parse(sessionStorage.loggedInSubUser);
    loggedUser['logoutTime']=new Date();
    if(localStorage.getItem("usersInfo")==null)
    {
        localStorage.setItem("usersInfo",new Array());
    }
    location.href="login.html";
}