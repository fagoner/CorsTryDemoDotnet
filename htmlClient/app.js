console.log("Hi dude!");


fetch("http://da:5000/values", {
    method: 'GET', // or 'PUT'
    // credentials: "include",
    // body: JSON.stringify(messageBody), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      console.log('Success:', response);
    });


// const messageBody = {
//   telefono: '1',
//   correo: 'dfdd',
//   mensaje: 'mes'
// }
//   fetch("https://dasol.dev/values", {
//     method: 'POST', // or 'PUT'
//     credentials: "include",
//     body: JSON.stringify(messageBody), // data can be `string` or {object}!
//     headers:{
//       'Content-Type': 'application/json'
//     }
//     }).then(res => res.json())
//     .catch(error => console.error('Error:', error))
//     .then((response) => {
//       console.log('Success:', response);
//     });