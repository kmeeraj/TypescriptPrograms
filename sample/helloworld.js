"use strict";
exports.__esModule = true;
var person_1 = require("./person");
console.log("Hello World");
var personData = {
    firstName: "M",
    lastName: "K"
};
var partialAddress = ['Madhapur'];
var address = partialAddress.concat(['Gachibowli']);
//const address = [...partialAddress,'Gachibowli','Sherlimgampali'];
console.log(person_1.buildPersonData(personData, address));
