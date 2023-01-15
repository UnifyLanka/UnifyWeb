async function LoginUser()
{
    var Username = document.getElementById('uname').value;
    var Password = document.getElementById('password').value;

    const loginQuery = await db.collection('LoginDetails').where('userName', '==', Username).get();
    if(!loginQuery.empty)
    {
        var loginDetail = loginQuery.docs[0].data();
        if(loginDetail.password == Password)
        {
            var userDetailsCode = loginDetail.userDetailsCode;
            var query = await db.collection("UserDetails").where('userDetailsCode', '==', userDetailsCode).get();
            var UserDetails = query.docs[0].data();
            sessionStorage.setItem('userDetailsCode', userDetailsCode);
            sessionStorage.setItem('loginCode', loginDetail.loginCode);
            sessionStorage.setItem('firstName', UserDetails.firstName);
            sessionStorage.setItem('lastName', UserDetails.lastName);
            sessionStorage.setItem('address', UserDetails.address);
            window.location.replace('/Unify/home.html');
        }
        else
        {
            alert('Invalid password');
        }
    }
    else
    {
        alert('Invalid username');
    }
}

