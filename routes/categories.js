const router = require('express').Router();
const db = require('../db');
module.exports = router;

// router.use('/',(req,res,next)=>{
//     res.categories = db.getCategories;
//     next();
// });

router.get('/', (req, res)=> {
  res.render('categories', {
    categories : db.getCategories()
  });
});

router.get('/:id',(req,res,next)=>{
    var id=req.params.id*1;
    res.render('category',{ 
        category:db.getCategory(id)
 });
});

router.post('/',(req,res,next)=>{
    var category=req.body ;
    var Id = db.insertCategory(category);
    res.redirect('/categories/'+Id);   //redirect to router.get

})


router.post('/:id/products',(req,res,next)=>{
    var product=req.body.name ;
    var categoryId = req.params.id*1;
    var id = db.insertProduct(categoryId,product);
    res.redirect('/categories/'+id);
})







