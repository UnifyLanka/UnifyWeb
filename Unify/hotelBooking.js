
const form = document.querySelector('#bookingForm');


form.addEventListener('submit', (e) => { 

e.preventDefault();
db.collection('Hotels').doc('Lpd71RryZ0oPGeMShmdS').collection('Bookings').add({
    BookingCode: form.bookingCode.value,
    FirstName:form.firstname.value,
    LastName:form.lastname.value,
    Email:form.email.value,
    MobileNo:form.telno.value,
    CheckIn:form.checkindate.value,
    CheckOut:form.checkoutdate.value,
    RoomType:form.roomtype.value,
    NofRooms:form.nofrooms.value,
    NofPeople:form.nofpeople.value,
    ArrivalTime:form.expectedtime.value
});

db.collection("Index")
    .where("indexName", "==", "Bookings").get()
    .then(function (querySnapshot) {
      querySnapshot.docs[0].ref.update({currentCount: parseInt(form.bookingCode.value.replace("BOK", "")) })
        .then(() => {
          window.location.replace('viewbookings.html')        });
    });

});


$(document).ready(async function () {
    const indexQuery = await db.collection('Index').where('indexName', '==', 'Bookings').get();
    if (!indexQuery.empty) {
      const bookingDetail = indexQuery.docs[0].data();
      $("#bookingCode").val(bookingDetail.prefix + (parseInt(bookingDetail.currentCount) + 1));
    }
  });