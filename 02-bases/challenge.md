# Challenge : Manipulation de documents

```js
const db = require('mongoose')
```

1. Créez une collection `products`.
```js
const productSchema = new Schema({ 
    name: String, 
    price: Number, 
    category: enum
    })
const Product = mongoose.model('Product', productSchema);
```
2. Insérez 5 produits avec les champs : `name`, `price`, `category`.
```js
db.products.insertOne({name: "iPhone 11", price: 15000, category: "phone"})
db.products.insertOne({name: "MacBook Pro", price: 25000, category: "laptop"})
db.products.insertOne({name: "Samsung TV", price: 8000, category: "electronics"})
db.products.insertOne({name: "Nike Shoes", price: 1200, category: "clothing"})
db.products.insertOne({name: "Coffee Maker", price: 500, category: "appliance"})
```
3. Affichez tous les produits dont le prix est supérieur à 100.
```js
db.products.find({$gt: 100})
```
4. Modifiez le prix d'un produit.
```js
db.products.updateOne({name:"iphone 11"}, $set:{price: 14000})
```
5. Supprimez un produit.
```js
db.products.deleteOne({name: "MacBook Pro"})
```