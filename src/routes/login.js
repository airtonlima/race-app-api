const express = require('express');
const jwt = require('jwt-simple')
const jwtSecret = require('../config/JwtSecret')
const ValidationError = require('../errors/ValidationError')

module.exports = app => {
    
    const router = express.Router();
    
    router.post('/', async (req, res, next) => {
        
        try
        {
            const { LOGIN_USER, LOGIN_PASSWORD, API_KEY } = process.env;
            
            const token = req.headers['x-api-key'];
            
            if (!token || token !== API_KEY) {
                res.status(403).json('Forbbiden')
                return;
            }
            
            const { username, password } = req.body;
            
            const message = 'Usuário ou senha inválidos! Verifique se digitou corretamente seus dados de acesso. Caso o problema persista contate o Administrador do sistema.'
            
            if (!LOGIN_USER || !LOGIN_PASSWORD)
            throw new ValidationError(message);
            
            if (!username || !password) 
            throw new ValidationError(message);
            
            if (!(username === LOGIN_USER && password === LOGIN_PASSWORD)) 
            throw new ValidationError(message);
            
            const payload = { username, timestamp: new Date().getTime() };
            
            const secret = await jwtSecret.getKey();
            
            res.status(200).json({
                ok: true, 
                token: jwt.encode(payload, secret, 'HS512'), 
                message: 'Login realizado com sucesso.'
            });
            
        } catch (err) {
            next(err);
        }
    });
    
    return router;
}