const usersRouters = require('express').Router();

usersRouters.post('/' , async (request, res) =>{
    console.log(request.body);
    const { name, email, password} = request.body
    console.log(name, email, password);
    
    res.status(200).json({ message: 'Usuario creado exitosamente' }); 
})

module.exports = usersRouters;