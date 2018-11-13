
// give us the express library, from npm
let express = require('express');

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



// start out server, listen for connection on PORT (5000)
app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`)
})