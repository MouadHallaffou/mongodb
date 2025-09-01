// Requête avancée :
// db.products.find({ price: { $gt: 100 } }, { name: 1, price: 1 })
//   .sort({ price: -1 })
//   .limit(10)

// Opérateurs logiques
// db.products.find({ $or: [ { category: "tech" }, { price: { $lt: 50 } } ] })
