const form = document.querySelector('#regform');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  var UserDetailsCode = form.registrationCode.value;
  var LoginCode = form.loginCode.value;
  var firstName = form.firstName.value;
  var lastName = form.lastName.value;
  var address = form.address.value;
  var mobileNo = form.mobileNo.value;
  var nic = form.nic.value;
  var email = form.email.value;

   
  const userDoc = db.collection('UserDetails').document();

  db.collection('UserDetails').document(userDoc.id).set({
    id: userDoc.id,
    userDetailsCode: UserDetailsCode,
    firstName: firstName,
    lastName: lastName,
    address: address,
    mobileNo: form.mobileNo.value,
    nic: form.nic.value,
    email: form.email.value,
    statusCode:'STS1'
  });

  db.collection('LoginDetails').add({
    loginCode: LoginCode,
    userDetailsCode: UserDetailsCode,
    userName: form.uname.value,
    password: form.password.value,
    userRoleCode:'USRRL2',
    statusCode:'STS1'
  });

  db.collection("Index")
    .where("indexName", "==", "UserDetails").get()
    .then(function (querySnapshot) {
      querySnapshot.docs[0].ref.update({ currentCount: parseInt(UserDetailsCode.replace("USRDL", "")) })
    });

    db.collection("Index")
      .where("indexName", "==", "LoginDetails").get()
      .then(function (querySnapshot) {
        querySnapshot.docs[0].ref.update({ currentCount: parseInt(LoginCode.replace("LGNDL", "")) })
          .then(() => {
            sessionStorage.setItem('userDetailsCode', UserDetailsCode);
            sessionStorage.setItem('loginCode', LoginCode);
            sessionStorage.setItem('firstName', firstName);
            sessionStorage.setItem('lastName', lastName);
            sessionStorage.setItem('address', address);
            sessionStorage.setItem('mobileNo', mobileNo);
            sessionStorage.setItem('nic', nic);
            sessionStorage.setItem('email', email);
            window.location.replace('/Unify/home.html');
          });
      });
});

$(document).ready(async function () {
  const indexUserDetailsQuery = await db.collection('Index').where('indexName', '==', 'UserDetails').get();
  if (!indexUserDetailsQuery.empty) {
    const userDetail = indexUserDetailsQuery.docs[0].data();
    $("#registrationCode").val(userDetail.prefix + (parseInt(userDetail.currentCount) + 1));
  }

  const indexLoginDetailsQuery = await db.collection('Index').where('indexName', '==', 'LoginDetails').get();
  if (!indexLoginDetailsQuery.empty) {
    const loginDetail = indexLoginDetailsQuery.docs[0].data();
    $("#loginCode").val(loginDetail.prefix + (parseInt(loginDetail.currentCount) + 1));
  }
});
