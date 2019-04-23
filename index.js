const express=require('express');
const body=require('body-parser');
const frontpage=require('./controllers/frontpagecont')
app=express();

app.use(body.urlencoded({extended:false}));
// app.use(body.json());

app.set('view engine','ejs');
app.use('/public',express.static('public'));
frontpage(app);
app.listen(4000,console.log('listening to port 4000'));
