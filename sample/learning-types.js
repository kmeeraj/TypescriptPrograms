function createHelloMessage(name) {
    return "Hello " + name;
}
var creator = createHelloMessage;
var msg = creator("Meeraj");
console.log(msg);
var message = createHelloMessage("Bill");
console.log(message);
console.log(createHelloMessage("Nill"));
//console.log(createHelloMessage({firstName : "Meeraj"}));
