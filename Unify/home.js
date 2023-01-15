var hotelDiv = document.getElementById('hotelDiv')

db.collection('Hotels').get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            console.log(doc.id, " => ", doc.data());
            var hotelImage = doc.data().hotelImage;
            var hotelName = doc.data().hotelName;
            var budget = doc.data().budget.toString();
            var hotelClass = doc.data().hotelClass;
            var hotelRating = doc.data().hotelRating;
            var freeWIFI = doc.data().freeWIFI;
            var airConditioned = doc.data().airConditioned;
            var freeBreakfast = doc.data().freeBreakfast;
            var teaCoffee = doc.data().teaCoffee;
            var bar = doc.data().bar;
            var roomService = doc.data().roomService;
            var pool = doc.data().pool;
            var parking = doc.data().parking;
            var spa =doc.data().spa;

            var card = "<div class='col-md-6 my-2' onclick='ViewHotel("+doc.id+")'><div class='d-flex place-body places-link'><img class='place-img' src='"+hotelImage+"'alt=''><div class='d-flex place-details'><div class='d-flex flex-column p-2 place-details-body'>"+
            '<h5>'+hotelName+'</h5>'+
                        '<span></span>'+
                        '<span>LKR '+budget+'</span>'+
                        '<span>'+hotelClass+' Star</span>'+
                        '<span>'+hotelRating+' Rating</span>'+
                        '<div class="row mt-3">';

                            if(freeWIFI==true)
                            {
                                card += '<div class="d-inline ml-3"><img src="\\cardImg\\wifi.png" style="height: 18px; width: 18px;"/></div>';
                            }

                            if(airConditioned==true)
                            {
                                card += '<div class="d-inline ml-3"><img src="\\cardImg\\air_conditioner.png" style="height: 18px; width: 18px;"/></div>';
                            }

                            if(freeBreakfast==true)
                            {
                                card += '<div class="d-inline ml-3"><img src="\\cardImg\\breakfast.png" style="height: 18px; width: 18px;"/></div>';
                            }

                            if(teaCoffee==true)
                            {
                                card += '<div class="d-inline ml-3"><img src="\\cardImg\\teacoffee.png" style="height: 18px; width: 18px;"/></div>';
                            }
                            

                            if(bar==true)
                            {
                                card += '<div class="d-inline ml-3"><img src="\\cardImg\\bar.png" style="height: 18px; width: 18px;"/></div>';
                            }

                            if(roomService==true)
                            {
                                card += '<div class="d-inline ml-3"><img src="\\cardImg\\room_service.png" style="height: 18px; width: 18px;"/></div>';
                            }

                            if(pool==true)
                            {
                                card += '<div class="d-inline ml-3"><img src="\\cardImg\\pool.png" style="height: 18px; width: 18px;"/></div>';
                            }

                            if(parking==true)
                            {
                                card += '<div class="d-inline ml-3"><img src="\\cardImg\\parking.png" style="height: 18px; width: 18px;"/></div>';
                            }

                            if(spa==true)
                            {
                                card +=  '<div class="d-inline ml-3"><img src="\\cardImg\\spa.png" style="height: 18px; width: 18px;"/></div>';
                            }
                            card+='</div></div></div></div></div>'

                            hotelDiv.innerHTML += card;
        });
    });


   
            