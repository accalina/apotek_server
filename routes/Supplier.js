
const supplier      = require('./../models').Supplier

module.exports = function(app){

    app.get('/supplier', async (req, res) => {
        supplierlist = await supplier.findAll({})
    
        res.send({msg: `supplier List API`, data: supplierlist})
    })
    
    app.post('/supplier', async (req, res) => {
        fullname    = req.body.name
        address     = req.body.address
        email       = req.body.email
        phone       = req.body.phone
        const newsupplier = await supplier.create({
            name: fullname,
            email: email,
            address: address,
            phone: phone
        })
        res.send({msg: `supplier ${fullname} Inserted!`})
    })
    
    app.put('/supplier', async (req, res) => {
        id          = req.body.id
        fullname    = req.body.name
        address     = req.body.address
        email       = req.body.email
        phone       = req.body.phone
        const existingsupplier = await supplier.update({
            name: fullname,
            email: email,
            address: address,
            phone: phone
        }, {where: {id: id}})
        res.send({msg: `supplier ${fullname} Updated!`})
    })
    
    app.delete('/supplier', async (req, res) => {
        fullname = req.body.name
        let supplier = awaitsupplier.destroy({where: {supplier: fullname}});
        res.send({msg: `supplier ${fullname} Deleted!`})
    })
}

