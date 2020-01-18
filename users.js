
if(sessionStorage.getItem("loggedInUserAsAdmin")==null )
{ 
    location.href="login.html";
}
if(sessionStorage.getItem('subUsers')==null)
{
    var allUsers=new Array();
    sessionStorage.subUsers=JSON.stringify(allUsers);
}
if(sessionStorage.getItem('userId')==null)
{
    sessionStorage.userId=0;
}
class SubUser
{
    constructor(id,name,email,password,birthdate)
    {
        this.id=id;
        this.name = name;
        this.email= email;
        this.password= password;
        this.birthdate= birthdate;
        this.calculateAge();    
    }
    calculateAge()
    {
        var year=parseInt( this.birthdate.slice(0,4) );
        this.age=new Date().getFullYear() - year;
        //console.log(this.age);
    }
}

function validate(name,email,password,birthdate)
{
    // name = addUser.name.value;
    // email = addUser.email.value;
    // password = addUser.password.value;
    // birthdate = addUser.DOB.value;

    if( name == "" ||  email== "" || password == "" || birthdate== "")
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
    return true;
}
var allSubUsers=JSON.parse(sessionStorage.subUsers);
function addNewUser()
{
    name = addUser.name.value;
    email = addUser.email.value;
    password = addUser.password.value;
    birthdate = addUser.DOB.value;
    if(validate(name,email,password,birthdate))
    {
        // console.log(name+email+password+birthdate);
        id=parseInt(sessionStorage.userId);
        id++;
        sessionStorage.userId=id;
        newUser= new SubUser(id,name,email,password,birthdate);
        allSubUsers.push(newUser);
        sessionStorage.subUsers=JSON.stringify(allSubUsers);
        // location.reload();
    }
    else
    {
        return false;
    }
}
function showAllUSers()
{
    if(sessionStorage.getItem('subUsers') !=null)
    {
        allSubUsers=JSON.parse(sessionStorage.subUsers);
    
        for(var i=0 ; i<allSubUsers.length ; i++)
        {
            var row=user_data.insertRow();
            var cell1=row.insertCell();
            var cell2=row.insertCell();
            var cell3=row.insertCell();
            var cell4=row.insertCell();
            var cell5=row.insertCell();
            var cell6=row.insertCell();
            cell1.innerHTML=allSubUsers[i].name;
            cell2.innerHTML=allSubUsers[i].email;
            cell3.innerHTML=allSubUsers[i].password;
            cell4.innerHTML=allSubUsers[i].birthdate;
            cell5.innerHTML=allSubUsers[i].age;
            cell6.innerHTML=`<button onclick="edit(${allSubUsers[i].id})">Edit</button>&nbsp&nbsp<button onclick= "deleteUser(${allSubUsers[i].id})">Delete</button> `;
        }
    }
    else
    {

    }
}
showAllUSers();
function deleteUser(userID)
{
    allSubUsers=JSON.parse(sessionStorage.subUsers);
    for(var i=0 ; i<allSubUsers.length ; i++)
    {
        if(allSubUsers[i].id == userID)
        {
            allSubUsers.splice(i,1);
            break;
        }
    }
    sessionStorage.subUsers=JSON.stringify(allSubUsers);
    location.reload();
} 
function edit(userID)
{
    var indexToUpdate;
    document.getElementById('addUser').style.display='none';
    document.getElementById('editUser').style.display='';
    allSubUsers=JSON.parse(sessionStorage.subUsers);
    for(var i=0 ; i<allSubUsers.length ; i++)
    {
        if(allSubUsers[i].id == userID)
        {
            indexToUpdate=i;
            break;
        }
    }
    document.getElementById('updateId').value=allSubUsers[indexToUpdate].id;
    document.getElementById('newName').value=allSubUsers[indexToUpdate].name;
    document.getElementById('newEmail').value=allSubUsers[indexToUpdate].email;
    document.getElementById('newPassword').value=allSubUsers[indexToUpdate].password;
    document.getElementById('newDOB').value=allSubUsers[indexToUpdate].birthdate;
}

function updateUser()
{
    var indexToUpdate;
    id=editUser.updateId.value;
    name=editUser.newName.value;
    email=editUser.newEmail.value;
    password=editUser.newPassword.value;
    birthdate=editUser.newDOB.value;
    if(validate(name,email,password,birthdate))
    {
        for(var i=0 ; i<allSubUsers.length ; i++)
        {
            if(allSubUsers[i].id == id)
            {
                indexToUpdate=i;
                break;
            }
        }
        console.log(id+name+email+password+birthdate);
        allSubUsers=JSON.parse(sessionStorage.subUsers);
        allSubUsers[indexToUpdate].name=name;
        allSubUsers[indexToUpdate].email=email;
        allSubUsers[indexToUpdate].password=password;
        allSubUsers[indexToUpdate].birthdate=birthdate;
        allSubUsers[indexToUpdate].age=(function(){
            var year=parseInt( this.birthdate.slice(0,4) );
            return new Date().getFullYear() - year;
            //console.log(this.age);
        })();
        sessionStorage.subUsers=JSON.stringify(allSubUsers);
        location.reload();      
    }
    else
    {
        return false;
    }
}