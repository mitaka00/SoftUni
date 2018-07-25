const fs = require('fs');
const path = require('path');


const Product = require('../models/Product');
const Category = require('../models/Category');
const User=require('../models/User');

module.exports.addGet = (req,res)=>{
   Category.find().then((categories)=>{
       res.render('products/add',{categories: categories})
   })
}

module.exports.addPost = (req,res) =>{
    let productObj = req.body;
    productObj.image = `/images/${req.file.filename}`;
    productObj.creator=req.user._id;
   

    Product.create(productObj).then((product) => {
        Category.findById(product.category).then((category)=>{
            category.products.push(product._id)

            User.findById(req.user._id).then((user)=>{
                user.createdProducts.push(product._id);
                user.save();
            })
            
            category.save();
            res.redirect('/')
        })
    })
}

module.exports.getEdit = (req,res)=>{
    let id = req.params.id;

    Product.findById(id).then((product)=>{
        if(!product){
            res.redirect(
                `/?error=${encodeURIComponent('Product was not found!')}`
            );
            return
        }

        if(!product.creator.equals(req.user._id) && (req.user.roles.indexOf('Admin')==-1)){
            res.redirect(
                `/?error=${encodeURIComponent("You don't have permission")}`
            );
            return
        }

        Category.find().then((categories)=>{
            res.render('products/edit',{
                product: product,
                categories: categories
            })
        })

      
    })
}

module.exports.deletePost = (req,res)=>{
    let id = req.params.id;

    Product.findByIdAndRemove(id).populate('category').then((removed)=>{
        let category = removed.category;


        let index = category.products.indexOf(removed._id)
        if(index>=0){
          category.products.splice(index,1)
        }
        category.save();
        res.redirect(
            `/?success=${encodeURIComponent('Product was deleted successfully!')}`
        );
        
    })
}

module.exports.getBuy = (req,res)=>{
    let id = req.params.id;

    Product.findById(id).then((product)=>{
        if(!product){
            res.redirect(
                `/?error=${encodeURIComponent('Product was not found!')}`
            );
            return
        }

        res.render('products/buy',{
            product: product,
        }) 
    })
}

module.exports.buyPost=(req,res)=>{
    let productId=req.params.id;

    Product.findById(productId).then(product=>{
        if(product.buyer){
            let error=`error=${encodeURIComponent('product was already bought')}`;
            res.redirect(`/?${error}`);
            return;
        }

        product.buyer=req.user._id;
        product.save().then(()=>{
            req.user.boughtProducts.push(productId);
            req.user.save().then(()=>{
                res.redirect('/')
            })
        })
    })
}

module.exports.deleteGet = (req,res)=>{
    let id = req.params.id;

    Product.findById(id).then((product)=>{
        if(!product){
            res.redirect(
                `/?error=${encodeURIComponent('Product was not found!')}`
            );
            return
        }
        if(!product.creator.equals(req.user._id) && (req.user.roles.indexOf('Admin')==-1)){
            res.redirect(
                `/?error=${encodeURIComponent("You don't have permission")}`
            );
            return
        }
        res.render('products/delete',{
            product: product,
                
        })
       

      
    })
}

module.exports.editPost = (req,res)=>{
    let id = req.params.id;
    let eProduct = req.body;

    Product.findById(id).then((product)=>{
        if (!product) {
            res.redirect(
                `/?error=${encodeURIComponent('Product was not found!')}`
            );
            return;
        }

        if(!product.creator.equals(req.user._id) && (req.user.roles.indexOf('Admin')==-1)){
            res.redirect(
                `/?error=${encodeURIComponent("You don't have permission")}`
            );
            return
        }

        product.name = eProduct.name;
        product.description = eProduct.description;
        product.price = eProduct.price;

        if(req.file){
          product.image = `/images/${req.file.filename}`;
        }

        if(product.category.toString()!==eProduct.category){
                Category.findById(product.category).then((current)=>{
                    Category.findById(eProduct.category).then((newOne)=>{
                        let index = current.products.indexOf(product._id)
                        if(index>=0){
                            current.products.splice(index,1)
                        }
                        current.save();
                        newOne.products.push(product._id)
                        newOne.save();
                        product.category = eProduct.category;

                        product.save().then(()=>{
                            res.redirect(
                                `/?success=${encodeURIComponent('Product was edited successfully!')}`
                            );
                        })
                    })
                })

        }else{
            product.save().then(()=>{
                res.redirect(
                    `/?success=${encodeURIComponent('Product was edited successfully!')}`
                );
            })
        }
    })

}




