const express = require('express');
const path = require('path');
const swig = require('swig');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./db');
swig.setDefaults({ cache: false });
//const routes = require('./products/products.routes.js');
const app = express();
app.use(methodOverride('_method'));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded( { extended: false }));
app.set('view engine', 'html');
app.engine('html',swig.renderFile);



app.get('/',(req,res,next)=>{
    res.render('index',{title:'Home',categories:db.getCategories()});
})

app.use('/categories',require('./routes/categories'));


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
