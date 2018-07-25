const Product=require('../data/Product');
const allowedToppings=['tomatoes','sauce','pickle','onion','lettuce']

module.exports.getAddProduct=(req,res)=>{
    if(req.user.username==="Admin"){
        res.render('products/create-product');
    }
    else{
        res.render('/');
    }
}

module.exports.postAddProduct=(req,res)=>{
    let productObj={};

    productObj.category=req.body.category
    productObj.imageUrl=req.body.imageUrl;
    productObj.size=Number(req.body.size);

    let inputToppings=req.body.toppings.split(',').map(e=>e.trim()).filter(e=>e.length>0 && allowedToppings.includes(e));
    productObj.toppings=inputToppings;
    
    Product.create(productObj).then(()=>{ 
      return res.redirect('/')
    })
}
