function started() {
    console.log("Startaed Dowload")
}
function update(progress) {
    console.log(progress, "% of Dowload");
}
function completed() {
    console.log("Dowload Finished")
}
function performDownload(x, y, z) {
    console.log(x());
    for (let i = 0; i <= 100; i++) {
        console.log(y(i));
    }
    console.log(z());
}
//console.log(performDownload(started, update, completed));


console.log("------------------------------4------------------------------")
var ArrayUtils = require("./ArrayUtils.js");
var array = [];
var array2 = [2, 3];
console.log(ArrayUtils.concatenate(array,array2));