console.log("Hi dude!");


fetch("https://localhost:5001/values", {
    method: 'GET', // or 'PUT'
    // body: JSON.stringify(messageBody), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then((response) => {
      console.log('Success:', response);
    });