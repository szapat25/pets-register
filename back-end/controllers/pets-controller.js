const Pet = require('../models/pet');
const petsController = {};

petsController.getPets = async (req, res) => {
    const pets = await Pet.find();
    res.json(pets);
};

petsController.createPet = async (req, res) => {
    const pet = new Pet(req.body);
    await pet.save();
    res.json({
        'status': "Pet saved"
    });
};

petsController.getPet = async (req, res) => {
    const pet = await Pet.findById(req.params.id);
    res.json(pet);
};

petsController.editPet = async (req, res) => {
    const pet = {
        name: req.body.name,
        type: req.body.type,
        gender: req.body.gender,
        breed: req.body.breed,
        age: req.body.age
    };
    await Pet.findByIdAndUpdate(req.params.id, { $set: pet }, { new: true });
    res.json({
        'status': 'Pet updated'
    });
};

petsController.deletePet = async (req, res) => {
    await Pet.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Pet removed'
    });
};

module.exports = petsController;