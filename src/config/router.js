const express = require('express')

module.exports = app => {

    const protected = express.Router();

    app.config.passport.then(auth => {
        
        const app_path = process.env.app_path ? process.env.app_path : '';

        protected.use('/race', app.routes.race);
        
        app.use(`${ app_path }/api`, auth.authenticate(), protected);

        app.use(`${ app_path }/auth/login`, app.routes.login);

        app.use((err, req, res, next) => {
            
            const { name, message, stack } = err;
            
            if (name === 'ValidationError') 
                res.status(400).json({ name, message, stack });
            else 
                res.status(500).json({ name, message, stack }); 
            
            next(err);
        });
    });
}