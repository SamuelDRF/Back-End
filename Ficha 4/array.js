var array = [];
array.push(function(){
    return "Hello world! 1";
})
array.push(function(){
    return "2";
})
array.push(function(){
    return "3";
})
array.forEach(array=>{
    console.log(array())
})