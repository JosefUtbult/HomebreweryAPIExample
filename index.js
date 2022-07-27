var express = require('express');
var app = express();

app.use('/static', express.static('static'));

app.get('/', (req, res)=>{
    res.sendFile('APIUsageExample.html', {'root': './content'});
});

app.listen(4000);