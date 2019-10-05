const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {
    async index(req, res){
        const { tech } = req.query;

        const filteredSpot = await Spot.find({techs: tech});

        return res.json(filteredSpot)
    },

    async store(req, res){
        const { company, value, techs } = req.body;
        const { filename } = req.file;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({
                error: "User not found"
            })
        }

        const spot = await Spot.create({ 
            user: user_id,
            thumb: filename,
            company,
            value,
            techs: techs.split(',').map(tech => tech.trim()),
        })

        return res.json(spot)
    }
}