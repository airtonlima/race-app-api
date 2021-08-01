const mongodb = require('../database/mongodb');

module.exports = _ => {

    const find = async params => {
        
        try
        {
            let pipeline = [
                {
                    $unwind: '$data.features'
                },
                {
                    $match: {
                        'data.features.properties.id': { $in: params.map(e => e.toString()) }
                    }
                },
                {
                    $project: {
                        ibgeID: { $toInt: '$data.features.properties.id' },
                        municipio: '$data.features.properties.name',
                        coordinates: '$data.features.geometry.coordinates',
                        _id: 0
                    }
                },
                {
                    $sort: { 'ibgeID': 1 }
                }
            ];

            return await mongodb.aggregate(pipeline);
            
        } catch (err) {
			throw err;
        }
    };

	const save = async params => {

		try 
		{
			const data = await mongodb.insert(params);

			return {
				ok: true,
                message: 'Corrida salva com sucesso !',
				data: {
                    insertedCount: data.insertedCount,
                    result: data.result,
                    insertedIds: data.insertedIds
                }
			};
			
		} catch (err) {
			throw err;
		}
	};

    return {
        find,
		save
    };
};
