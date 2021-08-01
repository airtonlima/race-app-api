
module.exports = app => {

    const save = async params => {

        try 
        {
            return await app.services.race.save(params)
            
        } catch (err) {
            throw err;
        }
    };

    return { 
        save
    };
}