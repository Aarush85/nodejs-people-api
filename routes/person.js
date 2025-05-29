const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
const validatePerson = require('../middlewares/validatePerson');


router.get('/', async (req, res, next) => {
    const people = await Person.find();
    res.json(people);
});


router.get('/:id', async (req, res, next) => {
    const person = await Person.findOne({ _id: req.params.id });
    if (!person) return res.status(404).json({ message: 'Person not found' });
    res.json(person);
});

router.post('/', validatePerson, async (req, res, next) => {
    const newPerson = await Person.create(req.body);
    res.status(201).json({ message: 'Person created successfully', data: newPerson });
});

router.put('/:id', validatePerson, async (req, res, next) => {
    const result = await Person.updateOne({ _id: req.params.id }, req.body);
    if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Person not found' });
    }
    const updated = await Person.findOne({ _id: req.params.id });
    res.json({ message: 'Person updated successfully', data: updated });
});

router.delete('/:id', async (req, res, next) => {
    const result = await Person.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Person not found' });
    }
    res.json({ message: 'Person deleted successfully' });
});

module.exports = router;
