"use strict";
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier
// pour extraire uniquement les produits dont l'option delivery est "special"
Object.defineProperty(exports, "__esModule", { value: true });
const MockProducts_1 = require("./data/MockProducts");
const Product_1 = require("./Product");
const products = [];
MockProducts_1.MockDetails.forEach(detail => products.push(new Product_1.Product(detail, MockProducts_1.MockDelivery.find(i => i.id === detail.id).delivery)));
console.log(products);
let finalproducts = products.filter(product => product.option === "special");
console.log(finalproducts);
