/*
function SetUsername(username) {
    // complex DB calls
    this.username = username;
}
function creatUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}
const chai = new creatUser("chai", "@chai", "123");
console.log(chai);
*/

/*
// //////////////////// classes /////////////////////////
// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new user("chai", "@fofalf", "123");
// console.log(chai.encryptpassword());
// console.log(chai.changeUserName());

// behind the scene
function User(username, email, password) {
    this.username = username;
        this.email = email;
        this.password = password;
}
User.prototype.encryptpassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
const chai = new User("chai", "@fofalf", "123");
console.log(chai.encryptpassword());
console.log(chai.changeUserName());
*/

// //////////inhertance ////////////
class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is : ${this.username}`)
    }
}
class teacher extends User{
    constructor(username, email, passord){
        super(username)
        this.email = email;
        this,passord = passord;
    }
    addcourse(){
        console.log(`A new course added by ${this.username}`);
    }
}
const chai = new teacher("chai", "@lasfd", "123")
chai.logMe()

const tea = new User("tea");
tea.logMe();
console.log(chai instanceof User);
