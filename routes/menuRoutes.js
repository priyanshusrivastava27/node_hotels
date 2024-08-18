const express = require('express');
const router = express.Router();

const MenuItem = require('../models/menu'); // <-- This line is corrected to import the MenuItem model without conflicting with Person.

// POST route to add a menu item
router.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('Menu data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Error' });
    }
});

// GET route to get the menu data
router.get('/menu', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Menu data found');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Data not found' });
    }
});

router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;
        if (taste == 'sweet' || taste == 'spicy' || taste == 'sour') {
            const response = await Person.find({ menu: taste });
            console.log('Data Fentched');
            res.status(200).json(response);
        } else {
            res.status(500).json({ error: 'Invalid taste' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Data not found' });
    }
})


module.exports = router;