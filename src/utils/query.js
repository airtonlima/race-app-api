const db = require('../database/sqlserver');

module.exports = _ => {

    const getWhereConditions = params => {

        let conditions = [' WHERE 1=1 '];
        let inputs = [];

        if (params.ano) 
        {
            conditions.push(`AND ANO = @P_ANO`);
            inputs.push({ key: `P_ANO`, type: db.Int, value: params.ano });
        }

        if (params.uf) 
        {
            let fields = [];
            params.uf = [].concat(params.uf);
            params.uf.forEach((value, idx) => {
                fields.push(`@P_UF_${ idx }`);
                inputs.push({ key: `P_UF_${ idx }`, type: db.Varchar, value });
            });
            params.uf.length > 0 &&
            conditions.push(`AND UF IN (${ fields.join(', ') })`);
        }

        
        return { conditions: conditions.join(' '), inputs };
    }

    const lowerCaseKeys = array => {

        try 
        {
            return array.map(item => {
                
                let mapped = {};
                
                for (let key in item) 
                { 
                    mapped[key.toLowerCase()] = item[key]; 
                }

                return mapped;
            });
        } 
        catch(err) { 
            return array 
        }
    }

    return { 
        getWhereConditions, 
        lowerCaseKeys
    };
}