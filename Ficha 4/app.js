
// console.log("2-a--------------------------------------------------------------------");//2-a--------------------------------------------------------------------
// var object ={name:"Joao",age:"20",gender:"Male"};
// object=JSON.stringify(object);
// console.log(object)

// console.log("2-b--------------------------------------------------------------------");//2-b--------------------------------------------------------------------
// var string='{"name":"Joao","age":"20","gender":"Male"}';
// string = JSON.parse(string);
// console.log(string);


var Emitter = require("./emitter");
var config = require("./config");

var emt = new Emitter();

emt.on(config.types.LOG,function(){
    console.log("Hello");
});


emt.on(config.types.LOG,function(){
    console.log("World");
});


emt.on(config.types.TEST,function(){
    console.log("Hello World");
});

emt.emit("log")
emt.emit("test")

var x = 0;