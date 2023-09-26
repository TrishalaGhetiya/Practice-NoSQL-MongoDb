const getDb = require('../util/database').getDb;

class Product{
  constructor(title, price, description, imageUrl){
    this.price = price;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save(){
    const db = getDb();
    return db.collection('products')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;
