const { Dog, Temperament } = require('../db');
const axios = require('axios');
const db = require('../db');

const getApiDogs = async () => {
    let apiInfo = await axios.get('https://api.thedogapi.com/v1/breeds');
    let apiDogs = await apiInfo.data.map(a => {
        return {
            id: a.id,
            name: a.name,
            weight: a.weight.metric + ' Kg',
            height: a.height.metric + ' cm',
            life_span: a.life_span,
            temperament: a.temperament,
            image: a.image.url
        }
    });
    return apiDogs;
};

const getDbDogs = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attribute: []
            }
        }
    })
};

const getDogs = async () => {
    const apiDog = await getApiDogs();
    const dbDog = await getDbDogs();
    const totalDogs = apiDog.concat(dbDog);
    return totalDogs;
};

const randomImg = async () => {
    let random = await axios.get('https://dog.ceo/api/breeds/image/random')
    return random.data.message
    
}

module.exports = {
    getDogs,
    randomImg
}