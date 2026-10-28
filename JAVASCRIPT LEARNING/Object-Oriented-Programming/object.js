//"new" kay word
// function multipaly5(num) {
//     return num*5;
// }
// multipaly5.power = 2;
// console.log(multipaly5(5));
// console.log(multipaly5.power);
// console.log(multipaly5.prototype);

const { prototype } = require("postcss/lib/previous-map");

function creatUser(userName,score) {
    this.userName = userName;
    this.score = score;
}
creatUser.prototype.increment = function() {
    this.score++
}
creatUser.prototype.printme = function(){
    console.log(`prise is : ${this.score}`);
}
const chai = new creatUser("chai", 25)
const tea = new creatUser("tea", 125)

chai.printme();

//////////prototype/////////////

let username = "bhawana   "
let chanle = "chai   "
console.log(username.trueLength);

let myhero = ["thor", "spiderman"]
let heropower = {
    thor: "hemmer",
    spiderman: "sling",
    getspiderpower : function(){
        console.log(`spidy power is = ${this.spiderman}`);
    }
}
Object.prototype.bha = function(){
    console.log(`bha is presten in all objects`);
}
Array.prototype.heybha = function(){
    console.log(`bha say hello`);
}
// heropower.bha();
// myhero.bha()
// myhero.heybha()
// heropower.heybha()

// inhertance
const user = {
    username : "chai",
    email : '@hello'
}
const Teacher = {
    mskevideo : true,
}
const Teachingsupport = {
    isavailable : false
}
const TAsupport = {
    makeasignement : 'JS assignment',
    fulltime : true,
    __proto__ : Teachingsupport
}
Teacher.__proto__ = user

// morden syntext
Object.getPrototypeOf(Teachingsupport, Teacher)
let anotherusername = "chaiaurcode   "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`trueLength is : ${this.trim().length}`);
}
anotherusername.trueLength()
"bhawana".trueLength();
"teaic".trueLength();
