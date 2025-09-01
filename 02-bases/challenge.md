# Challenge : Manipulation de documents

```js
const mongoose = require("mongoose");
const { Schema } = mongoose;
```

1. Créez une collection `products`.

```js
const productSchema = new Schema({
  name: String,
  price: Number,
  category: String,
});
const Product = mongoose.model("Product", productSchema);
```

2. Insérez 5 produits avec les champs : `name`, `price`, `category`.

```js
// Insérer plusieurs produits
await Product.insertMany([
  { name: "iPhone 11", price: 15000, category: "phone" },
  { name: "MacBook Pro", price: 25000, category: "laptop" },
  { name: "Samsung TV", price: 8000, category: "electronics" },
  { name: "Nike Shoes", price: 1200, category: "clothing" },
  { name: "Coffee Maker", price: 500, category: "appliance" },
]);
```

3. Affichez tous les produits dont le prix est supérieur à 100.

```js
// Trouver les produits > 100
const expensive = await Product.find({ price: { $gt: 100 } });
```

4. Modifiez le prix d'un produit.

```js
// Modifier le prix d'un produit
await Product.updateOne({ name: "iPhone 11" }, { $set: { price: 14000 } });
```

5. Supprimez un produit.

```js
// Supprimer un produit
await Product.deleteOne({ name: "MacBook Pro" });
```
