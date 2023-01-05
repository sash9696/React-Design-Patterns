let singleInstance;
let userDetails = {
    name : 'John',
    age : 20
}
class UserDetails{
    constructor(){
        if(singleInstance){
            throw new Error('Only one instance allowed')
        }
        singleInstance = this
    }
    getUserName(){
        return userDetails.name
    }
    setUserName(name) {
        userDetails.name = name;
    }
}
const singletonUser = Object.freeze(new UserDetails())

export default singletonUser

