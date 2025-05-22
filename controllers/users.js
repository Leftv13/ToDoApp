const usersRouters = require('express').Router();
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {PAGE_URL} = require('../config')


usersRouters.post('/' , async (req, res) =>{
    const { name, email, password} = req.body

    
    if (!name || !email || !password){
        return res.status(400).json({message: "Todos los campos son obligatorios"}); 
    }

    try {
        
        const userExist = await User.findOne({ email });

        if (userExist) {
            
            return res.status(409).json({ message: "Este email ya está en uso" }); 
        }

       
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            name,
            email,
            passwordHash, 
        });

        const savedUser = await newUser.save();

      
        const token = jwt.sign({id: savedUser.id}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1d"
        });
        
       
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: savedUser.email,
            subject: "Verificacion de usuario",
            html: `<a href="${PAGE_URL}/verify/${token}">Verify Mail</a>`,
        });

        
        return res.status(201).json({ message: "Usuario creado. Por favor verifica tu correo." });

    } catch (error) {
        
        console.error('Error al registrar el usuario:', error);

      

        return res.status(500).json({ message: 'Error interno del servidor al crear el usuario.', error: error.message });
    }
});

module.exports = usersRouters;