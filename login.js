if(sessionStorage.getItem("loggedInSubUser")!= null ) 
{
    location.href="sub_user.html";
}
else if(sessionStorage.getItem("loggedInUserAsAdmin")!=null )
{
    location.href="dashboard.html";
}

if(sessionStorage.getItem('admin') != null )
{
    document.getElementById('admin-regi').style.display= 'none';
}
function validate()
{
    email=login_form.email.value;
    password=login_form.password.value;
    console.log(email + password);
    if( email == "" || password == "" )
    {
        alert("all fields are mandatory");
        return false;
    }
    if( !/^[a-zA-Z0-9._-]+\@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/.test(email) )
    {
        alert("enter valid email");
        return false;
    }
    return true;
}
function login()
{
    if(sessionStorage.getItem('subUsers') !=null)
    {
        allSubUsers=JSON.parse(sessionStorage.subUsers);
    }    
    adminData=JSON.parse(sessionStorage.admin);
    email=login_form.email.value;
    password=login_form.password.value;
    if(validate())
    {
        if( email == adminData.adminEmail && password == adminData.adminPassword)
        {
            sessionStorage.loggedInUserAsAdmin=adminData.adminEmail;
            window.location.href="dashboard.html";
        }
        // else if( email == )
        else
        {
            for(var i=0 ; i< allSubUsers.length ; i++)
            {
                if( email == allSubUsers[i].email && password == allSubUsers[i].password )
                {
                    //window.location.href="";
                    loggedInUser={
                        name :allSubUsers[i].name,
                        email : allSubUsers[i].email,
                        birthDate : allSubUsers[i].birthdate,
                        loggedInTime : new Date()
                    }
                    sessionStorage.loggedInSubUser=JSON.stringify(loggedInUser);
                    console.log("logged in");
                    break;
                }
            }
            if(sessionStorage.getItem("loggedInSubUser")!= null)
            {
                location.href="sub_user.html";
            }
        }
    }
    else
    {
        return false;
    }
}