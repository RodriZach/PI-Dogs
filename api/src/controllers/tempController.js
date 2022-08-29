const { Temperament } = require('../db');
const { getDogs } = require('./functions');

async function getApiTemp(req, res) {
    try {
        let temperament = await Temperament.findAll();
        if (temperament.length === 0) {
            const dogs = await getDogs();
            let temps = await dogs.map(a => a.temperament).join().split(",");
            temps = temps.filter(c => c !== "").map(a => a.trim());
            
            temps?.map(s=> {
                Temperament.findOrCreate({
                    where: { name: s }
                });
            });
            temperament = await Temperament.findAll();
            
        };
        res.status(200).send(temperament);
    } catch (error) {
        res.status(404).send({ msg: error })
    };

};


module.exports = getApiTemp;
