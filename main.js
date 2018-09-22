// Step 1: load path and express
const path = require('path');
const express = require('express');

// Step 2: create an instance of the application
const app=express();

// Step 3: define routes = rules to handle requests
app.use(
    express.static( // middleware to serve static file
        path.join(__dirname,'angular')
    )
);
app.use((req, resp) => {
    resp.redirect('/404.html');
}
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


// Catch All
app.use((req, resp) => {
        resp.status(404);
        resp.sendFile(path.join(__dirname, '/images/404error.png'))
    }
);
// Step 4: start the Server
// Evaluation order: cmd arguments, env variable, default
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000

    console.log(process.argv);

    console.log('>>> APP_PORT', process.env.APP_PORT);

// Start Express and Listen to a port
// app.listen (3000, function()=>{

app.listen (PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`);

    console.info('\trunning directory is ',__dirname);
    // console.info('\tpublic directory is ', path.join(__dirname, 'public'));
    // console.info(path.join(__dirname,''));
    });
