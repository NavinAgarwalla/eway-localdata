

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data.json');


const app = express();
app.use(bodyParser.json());

// Load routesform
var state;
var district;
var botinput;
app.post('/state-informations',function (req,res) {
 
  state = req.body.nlp.entities.state[0].value;
  const stateInfos = state.value;
  district = req.body.nlp.entities.district[0].value;
  //const memory = req.body.nlp.entities;
  //var item=[{name:'giza',location:'frd'}];
  //res.send(item);

  console.log(state);
  console.log(district);

  botinput={state:state,district:district};

 

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

app.get('/state-informations',function(req,res)
  {
    res.send(botinput);
  });



app.post('/errors', function (req, res) {
  console.error(req.body);
  res.sendStatus(200);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 
  console.log(`App is listening on port ${PORT}`);});











































