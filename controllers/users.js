const usersRouters = require('express').Router()

usersRouters.post('/' , async (req, res) =>{
    console.log(req.body);
    const { name, email, password} = req.body
    console.log(name, email, password);
    
    res.status(201).json({ message: 'Usuario creado exitosamente' }); 
})

module.exports = usersRouters