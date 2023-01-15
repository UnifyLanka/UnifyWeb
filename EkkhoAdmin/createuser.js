$("#submit").click(function(){
        swal("User Successfully created", "Success", {
            button: "Ok!",
         });
  }
);

const form = document.querySelector('#createuserform');


form.addEventListener('submit', (e) => { 
  
    e.preventDefault();
    db.collection('LoginDetails').add({

        UserRoleID:form.userRoleID.value,
        UserName:form.userName.value,
        Password:form.password.value,
    });
 form.reset();
});