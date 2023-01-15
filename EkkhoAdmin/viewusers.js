function GetAllDataRealtime(){
    db.collection("UserDetails").onSnapshot((querySnapshot)=>{
        var UserDetails =[];
        querySnapshot.foreach(doc => {
            UserDetails.push(doc.data());
        });
        AddAllItemsToTheTable(UserDetails);
    });
}

var UserDetails_ID=0;
var tbody = document.getElementById('tbody1');

function AddItemToTable(UserDetailsID,LoginID,Password,StatusID,UserName,UserRoleID){
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');

    td1.innerHTML = ++UserDetailsID;
    td2.innerHTML = FirstName;
    td3.innerHTML = LastName;
    td4.innerHTML = NIC;
    td5.innerHTML = Address;
    td6.innerHTML = MobileNo;
    td7.innerHTML = UserRoleID;
    td8.innerHTML = StatusID;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);

    tbody.appendChild(trow);
}

function AddAllItemsToTheTable(UserDetailsList){
    UserDetails_ID=0;
    tbody.innerHTML="";
    UserDetailsList.foreach(element =>{
        AddItemsToTable(element.UserDetailsID,element.FirstName,element.LastName,element.NIC,element.Address,element.MobileNo,element.UserRoleID,element.StatusID);
    });
}

window.onload = GetAllDataRealtime;