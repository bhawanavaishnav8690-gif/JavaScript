class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email  = value;
    }
    get password(){
        return `${this._password}Bhawana`
    }
    set password(value){
        this._password = value;
    }
}
const bhawana = new User("bhiya@.ai", "abc");
console.log(bhawana.password);
console.log(bhawana.email);
