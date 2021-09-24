const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

 

// router.get('/area', function(req,res){
//     res.sendFile(path.join(__dirname+'/index.html'));
// });

 


// add the router
// app.use('/', router);
app.use('/public', express.static(path.join(__dirname, 'public')))
app.listen(process.env.port || 3000);

 

console.log('Running at Port 3000');