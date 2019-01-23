import {buildPersonData} from "./person";

console.log("Hello World");

var personData = {
    firstName:"M",
    lastName:"K"
};
var partialAddress=['Madhapur'];
const address = partialAddress.concat(['Gachibowli']);
//const address = [...partialAddress,'Gachibowli','Sherlimgampali'];
console.log(buildPersonData(personData,address));
