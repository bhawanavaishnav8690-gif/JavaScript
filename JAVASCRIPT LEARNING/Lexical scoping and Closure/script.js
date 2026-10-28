// Lexical scoping
/*
console.log("hello I am good");
function outer() {
    let username = "Bhawana";
    function inner() {
        let scrit = "my123";
        console.log(username);
    }
    function innertow() {
        console.log("tow user", username);
    }
    inner();
    innertow();
}
outer();
*/

function makeFunc() {
    const name = "Chrom";
    function displayName() {
        console.log(name);
    }
    return displayName
}
const myfunc = makeFunc();
myfunc();