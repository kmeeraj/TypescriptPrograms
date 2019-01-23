type MessageCreator = (name:string)=>string;

function createHelloMessage(name:string,extra ?:string ):string{
    return `Hello ${name}`;
}
const creator : MessageCreator = createHelloMessage;
const msg = creator("Meeraj");
console.log(msg);
const message = createHelloMessage("Bill");
console.log(message);
console.log(createHelloMessage("Nill"));
//console.log(createHelloMessage({firstName : "Meeraj"}));
