
const User      = require('./../models').User

module.exports = function(app){

    app.get('/user', async (req, res) => {
        userlist = await User.findAll({})
    
        res.send({msg: `User List API`, data: userlist})
    })
    
    app.post('/user', async (req, res) => {
        username    = req.body.name
        password    = req.body.password
        email       = req.body.email
        userlevel   = 1
        const newUser = await User.create({
            name: username,
            email: email,
            password: password,
            userlevel: userlevel
        })
        res.send({msg: `User ${username} Inserted!`})
    })
    
    app.put('/user', async (req, res) => {
        id          = req.body.id
        username    = req.body.name
        password    = req.body.password
        email       = req.body.email
        userlevel   = req.body.userlevel
        const existingUser = await User.update({
            name: username,
            email: email,
            password: password,
            userlevel: userlevel
        }, {where: {id: id}})
        res.send({msg: `User ${username} Updated!`})
    })
    
    app.delete('/user', async (req, res) => {
        username = req.body.name
        let user = awaituser.destroy({where: {user: username}});
        res.send({msg: `User ${username} Deleted!`})
    })
}

