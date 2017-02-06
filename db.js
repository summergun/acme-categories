const _categoryProducts = [
	{id:1,
    category:'Sports',
    products:
	[
		{ name: 'tennis',id:1},
		{ name: 'baseball',id:2}
    ]},
    {id:2,
    category:'Instrument',
    products:
	[
		{ name: 'oboe',id:1},
    ]},
	
];


module.exports = {
    getCategories,
    getCategory,
    insertCategory,
    // deleteCategory:deleteCategory,
     insertProduct,
    // deleteProduct:deleteProduct
};

// return the categoryProducts object
 function getCategories(){
    return _categoryProducts;
};

//return the category object

function getCategory(id){
 return _categoryProducts.filter(category=>category.id===id*1)[0];
}

//return current's MaxId
function getMaxId(arr){
    if(arr.length=0){
        return 0;
    }
    else {
    return  arr.reduce(function(a,b){
        return a.id>b.id? a.id:b.id;
    })
    }
}

//insert a new obj with input category in _categoryProducts array and return MaxId
function insertCategory(category){
    var newId=getMaxId(_categoryProducts)+1;
    var newcategory = {
        id:newId,
        category:category,
        products:[]
    }
    _categoryProducts.push(newcategory); 
    return newId;
}

function insertProduct (categoryId,product){
    var category=getCategory(categoryId);
    console.log(category);
    var newproductId = getMaxId(category.products)+1;
    var newproduct = {
        name:product,
        id:newproductId
    }
    category.products.push(newproduct);
    return id;
}










