const express = require ('express');
const app = express();
const path = require('path');
app.use('../public/index.html', home);
app.get('/email', (req, res) => 
{
res.send()	
})

const port = process.env.PORT || 8080;
app.listen(port, (port)=>{console.log(`listen on port: ${port}`)});