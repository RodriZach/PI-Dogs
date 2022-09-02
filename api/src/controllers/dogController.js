const { Dog, Temperament } = require('../db');
const { getDogs, randomImg } = require('./functions');

async function getAllDogs(req, res) {
    const { name } = req.query;
    let allDogs = await getDogs();
    try {
        if (name) {
            const nameDog = allDogs.filter(a => a.name.toLowerCase().includes(name.toLowerCase()));
            if (nameDog.length) {
                res.status(200).send(nameDog);
            } else {
                res.status(404).send("No se encontro ninguna raza")
            }
        } else {
            res.status(200).send(allDogs)
        }
    } catch (error) {
        res.status(404).send({ msg: "error de name" })
    }
};

async function getDogById(req, res) {
    const { id } = req.params;
    try {
        if (id) {
            let allDogs = await getDogs();
            let idDog = allDogs.find(a => a.id.toString() === id);
            return res.status(200).send(idDog);
        }
    } catch (error) {
        res.status(404).send({ msg: "no existe el id" })
    }
};

async function postDog(req, res) {
    const { name, weight_min, weight_max, height_min, height_max, life_span_min, life_span_max, temperaments, image } = req.body;
    const random = await randomImg()
    try {
        if (!name || !weight_min || !weight_max || !height_min || !height_max ) res.status(404).send({ msg: "faltan datos" });
        let search = await Dog.findOne({
            where: {
                name: name
            }
        });
        if (search) return res.send("ya existe el perro");
        const newDog = await Dog.create({
            name: name,
            weight: weight_min + ' - ' + weight_max + 'Kg',
            height: height_min + ' - ' + height_max + ' cm',
            life_span: life_span_min + '-' + life_span_max + ' years',
            image: image || random,
            

        });
        const temperamentDb = await Temperament.findAll({
            where:{
                name: temperaments,
            }
        });
        newDog.addTemperament(temperamentDb);
        res.send('Perro creado');
    } catch (error) {
        res.status(404).send({ msg: error })
    }

}

module.exports = {
    getAllDogs,
    getDogById,
    postDog
}