const express = require('express');
const router = express.Router();
const Person = require('../models/person');


//post rout to add  a person 
router.post('/person', async (req, res) => {
  try {
    const data = req.body //  request body contain the person data. (body Parser store data in req.data)

    const newPerson = new Person(data);

    const response = await newPerson.save();// .save() function is used to save the persin data.
    console.log('data saved');
    res.status(200).json(response);
  }

  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Error' });
  }
})

// GET methid to get the person data
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();//newPerson.find() function is use to get the peron data
    console.log('Person data found');
    res.status(200).json(data);

  }
  catch (err) {
    conslog.log(err);
    res.status(500).json({ error: 'data not fonund' });

  }
})

// get method agar mere ko person mai kewal work ke basic pe data cahiye jaise mereko sirf chef ka data
// chaiye ya manager ka ya waiter ka tb req.params.Worktype use krte hai(params = parentheses call )
router.get('/:WorkType', async (req, res) => {
  try {
    const WorkType = req.params.WorkType;
    if (WorkType == 'chef' || WorkType == 'manager' || WorkType == 'waiter') {
      const response = await Person.find({ Work: WorkType });
      console.log('Data Fentched');
      res.status(200).json(response);
    } else {
      res.status(500).json({ error: 'Invalid WorkType' });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Data not found' });
  }
})

//UPDATE operation in person data
router.put('/:id', async(req, res) =>{
  try{
    const personId = req.params.id; // extract id from url of data
    const UpdatedPersonData = req.body // update data from person

    const response = await Person.findByIdAndUpdate(personId,UpdatedPersonData,{
      new:true,
      runValidators:true,

    } )
    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }
    conslog.log('data Updated');
    res.status(200).json(response);


  }catch(err){
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
})

//DELETE operation 
router.delete('/:id', async(req, res) =>{
  try{
    const personId = req.params.id;
    const response = await personId.findByIdAndRemove(personId);
    if(!response){
      return res.status(404).json({error: 'Person Deleted'});
    }
    conslog.log('data deleted');
    res.status(200).json(message,'Person Data Deleted');
  }catch{
    console.log(err);
    res.status(500).json({ error: 'internal server error'});
  }
} )


module.exports = router;