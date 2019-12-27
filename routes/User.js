

const bcrypt = require('bcryptjs')
const jwt       = require('jsonwebtoken')

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

        hashpasswd  = bcrypt.hashSync(password, 12)

        const newUser = await User.create({
            name: username,
            email: email,
            password: hashpasswd,
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


    app.get('/token', (req, res) => {
        console.log(req.headers)
        // token = req.headers['x-access-token']

        token = req.headers['authorization'].replace("Bearer ", "")
        if (!token) return res.status(401).send({'status': 'error', 'msg': 'No token provided', 'token': token})

        jwt.verify(token, "sEcrEt", function(err, decoded){
            // if (err) return res.status(500).send({'status': 'error', 'msg': 'Failed to authenticate token'})
            if (err) return res.status(500).send({'status': 'error', 'msg': err['message']})

            res.status(200).send({'status': 'success', 'data': {'decoded': decoded, 'msg': 'Hello World!'}})
        })
    })

    app.post('/token',(req, res) => {
        let token = jwt.sign({id: 1}, "sEcrEt", { expiresIn: 15 })
        res.send({'msg': 'success', 'data': {'token': token}})
    })
}

