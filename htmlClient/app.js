console.log("Hi dude!");

fetch("http://da:5000/values", {
  method: "GET", // or 'PUT'
  // credentials: "include",
  // body: JSON.stringify(messageBody), // data can be `string` or {object}!
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => {
    console.log("Success:", response);
  });

// const messageBody = {
//   telefono: '1',
//   correo: 'dfdd',
//   mensaje: 'mes'
// }

const messageBody = {
  name: "TypoName",
};

fetch("http://167.172.193.94/values", {
  method: "POST", // or 'PUT'

  body: JSON.stringify(messageBody), // data can be `string` or {object}!
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => {
    console.log("Success:", response);
  });
