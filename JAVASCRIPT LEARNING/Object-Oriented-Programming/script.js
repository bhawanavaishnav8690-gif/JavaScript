/* const user = {
    username: "Bhawana",
    logincount: 8,
    signedIn: true,
    getuserDatails : function () {
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
// console.log(user.getuserDatails());
console.log(this);
*/


function User(userName, loginCount, isLoogedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoogedIn = isLoogedIn;

    this.getting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this;
}
const userOne = new User("bhawana", 12, true)
const userTwo = new User("chaiaurcode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
