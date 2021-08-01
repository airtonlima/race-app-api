const express = require('express');

module.exports = app => {
    
    const router = express.Router();
    
    router.post('/save', (req, res, next) => {
        app.models.race.save(req.body)
            .then(data => res.status(200).json(data))
            .catch(err => next(err));
    });
    
    return router;
}
