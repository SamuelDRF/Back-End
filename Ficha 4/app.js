console.log("2-a--------------------------------------------------------------------");//2-a--------------------------------------------------------------------
var object ={name:"Joao",age:"20",gender:"Male"};
object=JSON.stringify(object);
console.log(object)

console.log("2-b--------------------------------------------------------------------");//2-b--------------------------------------------------------------------
var string='{"name":"Joao","age":"20","gender":"Male"}';
string = JSON.parse(string);
console.log(string);