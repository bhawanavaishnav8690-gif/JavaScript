
class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is = ${this.username}`);
    }
    createdId(){
        return `123`
    }
}
const bhawana = new User("Bhawana")
// console.log(bhawana.createdId())

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}
const iphone = new teacher("Iphone","i@phone.com" )
console.log(iphone.createdId());
