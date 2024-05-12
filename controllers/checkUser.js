const Users = require("../models/users")
exports.addUser = (req, res) => {
    const { firstName, lastName } = req.body
    Users.addUser({ firstName, lastName })
    res.redirect("/users")
}
exports.indexUser = (req, res) => {
    const users = Users.getAllUsers()
    res.render("users", { users: users })
}
exports.deleteUser = (req, res) => {
    const indexUser = parseInt(req.params.index, 10)
    if (!isNaN(indexUser)) {
        Users.removeUser(indexUser)
        res.redirect('/users')
    } else {
        res.status(400).send("Invalid index")
    }
}
exports.addUsersForm = (req, res) => {
    res.render("add__users")
}