db.collection('Hotels').doc('Lpd71RryZ0oPGeMShmdS').collection('Bookings').get()
.then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            let data = doc.data();
            let row  = `<tr>
                            <td>${data.BookingCode}</td>
                            <td>${data.FirstName}</td>
                            <td>${data.LastName}</td>
                            <td>${data.MobileNo}</td>
                            <td>${data.Email}</td>
                            <td>${data.RoomType}</td>
                            <td>${data.NofRooms}</td>
                            <td>${data.NofPeople}</td>
                            <td>${data.CheckIn}</td>
                            <td>${data.CheckOut}</td>
                            <td>${data.ArrivalTime}</td>
                      </tr>`;
            let table = document.getElementById('viewBooking')
            table.innerHTML += row
        })
    })
    .catch(err=>{
        console.log(`Error: ${err}`)
    });
