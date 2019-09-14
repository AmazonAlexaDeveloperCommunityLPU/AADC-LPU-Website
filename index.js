express=require('express');
path=require('path');
bodyParser=require('body-parser');
app=express()

port = process.env.PORT || 1998;

app.use(express.static(path.join(__dirname, 'public')));
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(port,function(){
    console.log('Listening at port ' + port);
});
// Localhost Address= localhost:1998
