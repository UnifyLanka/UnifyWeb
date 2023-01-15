var RoomDiv = document.getElementById("RoomDiv");
var roomTypes = [];
db.collection("Hotels")
  .doc("Lpd71RryZ0oPGeMShmdS")
  .collection("RoomTypes")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var roomType = {
            'roomTypeCode' : "",
            'roomType' : ""
        };
        roomTypes.push(roomType);
    });
  });

  var hotelID = $_POST('HotelID');
  alert(hotelID);

db.collection("Hotels")
  .doc("Lpd71RryZ0oPGeMShmdS")
  .collection("Rooms")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      var hotelCode = doc.data().hotelCode;
      var noOfAdults = doc.data().noOfAdults;
      var noOfChildren = doc.data().noOfChildren;
      var noOfTotalRooms = doc.data().noOfTotalRooms;
      var roomCode = doc.data().roomCode;
      var roomDescription = doc.data().hotelRating;
      var currencyCode = doc.data().currencyCode;
      var roomImage = doc.data().roomImage;
      var roomPrice = doc.data().roomPrice;
      var statusCode = doc.data().statusCode;
      var freeWIFI = doc.data().freeWIFI;
      var television = doc.data().television;
      var airConditioned = doc.data().airConditioned;
      var freeBreakfast = doc.data().freeBreakfast;
      var teaCoffee = doc.data().teaCoffee;
      var bar = doc.data().bar;
      var roomService = doc.data().roomService;
      var pool = doc.data().pool;
      var parking = doc.data().parking;
      var spa = doc.data().spa;
      var roomTypeCode = "ROMTP1";
      var roomType = roomTypes.filter(roomType=>roomType.roomTypeCode===roomTypeCode);
      alert(roomType.roomType);
    
      var card =
        '<div class="col-md-12 my-1"><a href="./hotel.html" target="_blank"><div class="d-flex place-body places-link"><img class="place-img" src="../images/riifHotelSuperiorRoom.jpg" alt="" style="width: 490px;">' +
        '<div class="d-flex place-details p-3">' +
        '<div class="d-flex flex-column p-2 place-details-body">' +
        '<h2>'+roomCode+'</h2>' +
        '<span></span>'+
        '<h3 class="font-weight-bold">'+roomPrice+'</h3>'
      '<span style="color: darkorange;">'+statusCode+'</span>' +
        '<div class="d-block text-justify">'+roomDescription+'</div>' +
        '<div class="row mt-3">';

      if (freeWIFI == true) {
        card +=
          '<div class="d-inline ml-3"><img src="\\cardImg\\wifi.png" style="height: 18px; width: 18px;"/></div>';
      }

      if (airConditioned == true) {
        card +=
          '<div class="d-inline ml-3"><img src="\\cardImg\\air_conditioner.png" style="height: 18px; width: 18px;"/></div>';
      }

      if (freeBreakfast == true) {
        card +=
          '<div class="d-inline ml-3"><img src="\\cardImg\\breakfast.png" style="height: 18px; width: 18px;"/></div>';
      }

      if (teaCoffee == true) {
        card +=
          '<div class="d-inline ml-3"><img src="\\cardImg\\teacoffee.png" style="height: 18px; width: 18px;"/></div>';
      }

      if (bar == true) {
        card +=
          '<div class="d-inline ml-3"><img src="\\cardImg\\bar.png" style="height: 18px; width: 18px;"/></div>';
      }

      if (roomService == true) {
        card +=
          '<div class="d-inline ml-3"><img src="\\cardImg\\room_service.png" style="height: 18px; width: 18px;"/></div>';
      }

      if (pool == true) {
        card +=
          '<div class="d-inline ml-3"><img src="\\cardImg\\pool.png" style="height: 18px; width: 18px;"/></div>';
      }

      if (parking == true) {
        card +=
          '<div class="d-inline ml-3"><img src="\\cardImg\\parking.png" style="height: 18px; width: 18px;"/></div>';
      }

      if (spa == true) {
        card +=
          '<div class="d-inline ml-3"><img src="\\cardImg\\spa.png" style="height: 18px; width: 18px;"/></div>';
      }

      card +='</div></div><div class="d-flex align-items-end"><button type="button" class="btn btn-primary mb-1">Reserve Now</button></div></div></div></a></div>'

      RoomDiv.innerHTML += card;
    });
  });
