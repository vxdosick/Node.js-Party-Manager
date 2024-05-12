let parties = []
class Party {
    constructor({ name, info, date, location, users }) {
        this.name = name
        this.info = info
        this.date = date
        this.location = location
        this.users = users
    }
    static add(data) {
        const newParty = new Party(data)
        parties.push(newParty)
    }
    static getAll() {
        return parties
    }
    static remove(index) {
        if (index >= 0 && index < parties.length) {
            parties.splice(index, 1)
        }
    }
}
module.exports = Party