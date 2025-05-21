const loginRouter = require('express').Router();
const User = require('../models/user');
const { response } = require('express');
const bcrypt = require('bcrypt');

loginRouter.post('/', async (request, response) => {
    const { email, password } = request.body;
    const userExist = await User.findOne({ email });
    
    if (!userExist) {
        return response.status(401).json({ error: 'email o contraseña invalido' });
    }

    if (userExist.verified === false) {
        return response.status(401).json({ error: 'tu email no ha sido verificado' });
    }

    const isCorrect = await bcrypt.compare(password, userExist.passwordHash);

    if (!isCorrect) {
        return response.status(401).json({ error: 'email o contraseña invalido' });
    }
});

module.exports = loginRouter;