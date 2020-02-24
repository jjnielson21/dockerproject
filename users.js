const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(12); //default round is 10 


class User {
    constructor(first, last, email, password) {
        this.first= first;
        this.last = last;
        this.email = email;
        this.password = password;
    }
    validatePassword (password){
        hashedPassword = bcrypt.hashSync(password, salt); 
        isMatched = bcrypt.compareSync(password, hashedPassword);
        
        
        //compare password and return true or false
        //usage example:
        // let sam = new User('sam', 'spade', 'sspade@spy.org', 'password' );
        // let isPasswordGood = same.validatePassord('ilovesam');  -- here the return vale is false
        // let isPasswordGood = same.validatePassord('password');  -- here the return vale is true
    }
}
class Users {  // user collection
    constructor() {
        //usage example:
        // let userCollection = new Users();
        this.userArray = [];
    }
    addOne(user){
        //add new user to the array
        //usage example:
        //let oneNewUser = new User(.........)
        //let userCollection = new Users();
        // userCollection.addOne(oneNewUser);
    }
    findOne(email, callback){
        let aUser = false;
            // do we have a match user with the same given email
            // if so returen that user
            // example
            //   users.findOne(email, (err, user) =>{
                    // do whatever needed to be done
            //})....
        callback(null, aUser);
    }
    // listAll(){
    //     // return all users
    // }
}
let admin = new User('admin','root','root@mtech.org','abc');
let jeff = new User('jeff','smith','jsmith@mtech.org','123');
let users = new Users();
users.addOne(admin);
users.addOne(jeff);
module.exports = users;