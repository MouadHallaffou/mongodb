# Challenge : Requêtes avancées

1. Récupérez les 3 produits les plus chers.
```js
db.products.find().sort({price: -1}).limit(3)
```
2. Affichez tous les produits de la catégorie "tech" ou dont le prix est inférieur à 50.
```js
db.products.find({
  $or: [
	{ category: "tech" },
	{ price: { $lt: 50 } }
  ]
})
```
3. Affichez uniquement les champs `name` et `price` pour tous les produits.
```js
db.products.find({}, { name: 1, price: 1, _id: 0 })
```