let users = []
class Users {
    constructor({firstName, lastName}) {
        this.firstName = firstName
        this.lastName = lastName
    }
    static addUser(data) {
        const newUsers = new Users(data)
        users.push(newUsers)
    }
    static getAllUsers() {
        return users
    }
    static removeUser(index) {
        if (index >= 0 && index < users.length) {
            users.splice(index, 1)
        }
    }
}
module.exports = Users