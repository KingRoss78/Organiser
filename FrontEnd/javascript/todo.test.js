const { today } = require('./script.js');

// Format the date
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

let formattedDate = mm + '/' + dd + '/' + yyyy;

// Log the date
console.log(formattedDate);