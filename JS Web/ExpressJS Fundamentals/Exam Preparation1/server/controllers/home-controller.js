const Product=require('../data/Product');

module.exports = {
  index: (req, res) => {
    Product.find({})
    .then((currentProducts)=>{
      let chicken=currentProducts.filter(p=>p.category==='chicken')
      let lamb=currentProducts.filter(p=>p.category==='lamb')
      let beef=currentProducts.filter(p=>p.category==='beef')

      let products={
        lamb,
        chicken,
        beef
      }

      return res.render('index',{products})
    }).catch((err)=>{
      res.render('index');
    })
  }
}