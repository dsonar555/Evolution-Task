adminData=JSON.parse(sessionStorage.admin);
document.getElementById('adminName').innerHTML=" Welcome "+adminData.adminName;

allSubUsers=JSON.parse(sessionStorage.subUsers);   
var lt18=0;
var between18_50=0;
var gt50=0; 
for(var i=0 ; i<allSubUsers.length ; i++)
{
    if(allSubUsers[i].age < 18)
    {
        lt18++;
    }
    else if( allSubUsers[i].age >=18 && allSubUsers[i].age<=50)
    {
        between18_50++;
    }
    else if( allSubUsers[i].age > 50)
    {
        gt50++;
    }
}
document.getElementById('lt18').innerHTML=lt18;
document.getElementById('between18_50').innerHTML=between18_50;
document.getElementById('gt50').innerHTML=gt50;