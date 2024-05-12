const express = require("express")
const session = require("express-session")
const app = express()
const PORT = 3000
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}))
const partyController = require('./controllers/partyController')
const checkUser = require('./controllers/checkUser')
const Users = require("./models/users")
app.get("/", partyController.index)
app.get("/add", partyController.addPartyForm)
app.post("/add__party", partyController.addParty)
app.get("/users", checkUser.indexUser)
app.get("/add__users", checkUser.addUsersForm)
app.get('/delete-party/:index', partyController.deleteParty)
app.get('/delete-user/:index', checkUser.deleteUser);
app.post("/add__party", (req, res) => {
    Party.add(req.body)
    res.redirect("/")
})
app.post("/add__users", (req, res) => {
    Users.addUser(req.body)
    res.redirect("/")
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})