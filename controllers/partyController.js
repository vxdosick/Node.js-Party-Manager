const Party = require('../models/party')
exports.addParty = (req, res) => {
    const { name, info, date, location, users } = req.body
    Party.add({ name, info, date, location, users })
    res.redirect("/")
}
exports.index = (req, res) => {
    const parties = Party.getAll()
    res.render("index", { parties: parties })
}
exports.deleteParty = (req, res) => {
    const index = parseInt(req.params.index, 10)
    console.log("Index to delete:", index)
    if (!isNaN(index)) {
        Party.remove(index)
        res.redirect('/')
    } else {
        res.status(400).send("Invalid index")
    }
}
exports.addPartyForm = (req, res) => {
    res.render("add")
}
exports.editPartyForm = (req, res) => {
    const index = parseInt(req.params.index, 10)
    const party = Party.get(index)
    if (party) {
        res.render("edit", { party: party, index: index })
    } else {
        res.status(404).send("Party not found")
    }
}
exports.updateParty = (req, res) => {
    const index = parseInt(req.params.index, 10)
    const { name, info, date, location, users } = req.body
    if (!isNaN(index) && Party.update(index, { name, info, date, location, users })) {
        res.redirect("/")
    } else {
        res.status(400).send("Invalid data or index")
    }
}
