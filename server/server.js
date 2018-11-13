
// give us the express library, from npm
let express = require('express');

// import modules
let add = require('./modules/add.modules');
let subtract = require('./modules/subtract.modules');
let Cohort = require('./modules/names.modules');


let vega = new Cohort();

// creat an instance of express
// app is out application
// app is an object
let app = express();
// variable for our PORT
const PORT = 5000;

// server our static assets (HTML, CSS, JS)
// they live in the public folder
//

app.use(express.static('server/public'));


//listening for /vega in localhost:5000
// >> localhost:5000/vega
app.get('/vega', function(request, response){
    let result = add ( 3, 4);
    vega.printCohort();
    response.send(`result :${result}`);
});

app.get('/subtract', function(request, response){
    let result = subtract ( 4, 3);
    response.send(`result :${result}`);
});



// start out server, listen for connection on PORT (5000)
app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`)
})