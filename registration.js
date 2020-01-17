if(sessionStorage.getItem('admin') !=null )
{
    document.getElementById('registration_form').style.display='none';
}
function validate()
{
    name=registration_form.name.value;
    email=registration_form.email.value;
    password=registration_form.password.value;
    confirm_password=registration_form.confirm_password.value;
    state= registration_form.state.value;
    city= registration_form.city.value;
    terms=  registration_form.terms.value
    // console.log(name + email + password + confirm_password + state + city + terms);
    if( name == "" ||  email== "" || password == "" || confirm_password == "" ||  city== "" || state== "" || terms == "")
    {
        alert("all fields are mandatory");
        return false;
    }
    if( !/^[A-z]/.test(name) )
    {
        alert("enter valid name");
        return false;
    }
    if( !/^[a-zA-Z0-9._-]+\@[a-zA-Z]+\.[a-zA-Z.]{2,5}$/.test(email) )
    {
        alert("enter valid email");
        return false;
    }
    if( password != confirm_password )
    {
        alert("password and confirm password should be same");
        return false;
    }

    var adminData= {
        adminName : name,
        adminEmail : email,
        adminPassword : password,
        adminCity : city,
        adminState : state
    }
    console.log(adminData);
    sessionStorage.admin = JSON.stringify(adminData);
    //window.location.href("login.html");
}