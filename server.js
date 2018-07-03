

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data.json');


const app = express();
app.use(bodyParser.json());

// Load routesform
app.post('/state-informations',function (req,res) {
 
  const state = req.body.nlp.entities.state;
  const stateInfos = state.value;
   const memory = req.body.nlp.entities;
  
  console.log(memory);

 

  if (!stateInfos) {
    res.json({
      replies: [
        { type: 'text', content: `I don't know a state called ${state} :(` },
      ],
    });
  } else {
    res.json({
      replies: [
        { type: 'text', content: stateInfos.Mobile },
        { type: 'text', content: stateInfos.Mail },
        
      ],
    });
  }
});



app.post('/errors', function (req, res) {
  console.error(req.body);
  res.sendStatus(200);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 
  console.log(`App is listening on port ${PORT}`);});











































