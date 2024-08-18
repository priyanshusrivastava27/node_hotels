const express = require('express')// require matlb ye hota hai ki hme express ki jrurat hai.
const app = express()//is step mai express ka blueprint(naksha) apne app mai import kr liya. mtlb app ke pass sari jankri hai jisse hmara server ban skta hai.
const db = require('./db'); //export database file.

const bodyParser = require('body-parser'); // Correct way to require body-parser
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON datanode


const Person = require('./models/person'); // This imports the Person model correctly.
const MenuItem = require('./models/menu'); // <-- This line is corrected to import the MenuItem model without conflicting with Person.




app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/Priyanshu', (req, res)=>{
    res.send('Hi Priyanshu ')
}) 



// POST route to add a menu item
app.post('/menu', async (req, res) => {
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
app.get('/menu', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('Menu data found');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Data not found' });
  }
});

// Import router file
const personRoutes = require('./routes/personRoutes');


// use the router
app.use('/person', personRoutes);

app.listen(3000, ()=>{
  console.log('server is listining on port 3000')// yha function parameter pass kiye ki server mera active hai ye message aaye.
}) // 3000 ye port hai hmare server ka.