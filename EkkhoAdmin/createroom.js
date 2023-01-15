const form = document.querySelector('#createRoom');

form.addEventListener('submit', (e) => { 

e.preventDefault();

const ref = firebase.storage().ref()
    const file = document.querySelector('#ImgFile').file[0];
    const name =  file.name;
    
    /*const metadata={
        contentType:file.type
    }*/

    const imgreference = await ref.child(name);
    const imgSnap = await imgreference.put(file.buffer);
    const downloadLink = await imgSnap.ref.getDownloadURL();


db.collection('Hotels').doc('Lpd71RryZ0oPGeMShmdS').collection('Rooms').add({

    RoomNo:form.roomno.value,
    RoomType:form.roomtype.value,
    RoomImage:form.downloadLink.value,
    RoomDesc:form.roomdesc.value,
    NofPeople:form.nopeople.value,
    Price:form.price.value,
    FreeWifi:form.freewifi.value,
    Pool:form.pool.value,
    Complimentaries:form.complimentries.value,
    TeaCoffee:form.teacoffee.value
});

form.reset();
});