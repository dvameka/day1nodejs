// load some libraries
const path = require('path');
const express = require('express');

// create an instance of Express
const app=express();

// define routes = rules to handle requests
app.use(
    express.static( // middleware to serve static file
        path.join(__dirname,'public')
    )
);
app.use(
    express.static( // middleware to serve static file
        path.join(__dirname,'images')
    )
);

app.use(
    express.static( // middleware to serve static file
        path.join(__dirname,'media')
    )
);

app.use((req, resp) => {
        resp.status(404);
        resp.sendFile(path.join(__dirname, '/public/404error.png'))
    }
);

// Start Express and Listen to a port
// app.listen (3000, function()=>{

app.listen (3000, ()=>{
    console.info('application started on port 3000');
    console.info('\trunning directory is ',__dirname);
    console.info('\tpublic directory is ', path.join(__dirname, 'public'));
    console.info(path.join(__dirname,''));
    });
