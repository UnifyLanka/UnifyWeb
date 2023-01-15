const form = document.querySelector("#hotelBookingForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("Hotels").add({
    hotelCode: form.HotelCode.value,
    hotelName: form.HotelName.value,
    hotelImage:'https://firebasestorage.googleapis.com/v0/b/unifylk.appspot.com/o/Images%2FHotels%2FHTL6%2FCoverImages%2FImage-1?alt=media&token=3068ccc4-0258-4000-8034-1f3b62e26a3c',
    hotelLocation: form.HotelLocation.value,
    hotelClass: parseInt(form.HotelClass.value),
    hotelTelNo: form.HotelTelNo.value,
    budget: parseFloat(form.Budget.value),
    currencyCode: form.CurrencyCode.value,
    freeWIFI: form.FreeWIFI.checked,
    airConditioned: form.AirConditiond.checked,
    freeBreakfast: form.FreeBreakfast.checked,
    teaCoffee: form.TeaCoffee.checked,
    bar: form.Bar.checked,
    roomService: form.RoomService.checked,
    television: form.Tv.checked,
    pool: form.Pool.checked,
    spa: form.Spa.checked,
    parking: form.Parking.checked,
    hotelRating:0,
    statusCode:'STS1',
    userDetailsCode:sessionStorage.getItem("userDetailsCode")
  });

  db.collection("Index")
    .where("indexName", "==", "Hotels")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.docs[0].ref
        .update({
          currentCount: parseInt(
            form.HotelCode.value.replace("HTL", "")
          ),
        })
        .then(() => {
          window.location.replace("/Unify/home.html");
        });
    });
});

$(document).ready(async function () {
  const indexQuery = await db
    .collection("Index")
    .where("indexName", "==", "Hotels")
    .get();
  if (!indexQuery.empty) {
    const registrationDetail = indexQuery.docs[0].data();
    $("#HotelCode").val(
      registrationDetail.prefix +
        (parseInt(registrationDetail.currentCount) + 1)
    );
  }
});
