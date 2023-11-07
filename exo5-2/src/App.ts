// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier
// pour extraire uniquement les produits dont l'option delivery est "special"

import { Details, Delivery,MockDetails, MockDelivery  } from "./data/MockProducts";
import { Product } from "./Product";

const products: Array<Product<Details, Delivery>> = [];

MockDetails.forEach(detail => products.push(new Product(detail, MockDelivery.find(i => i.id === detail.id).delivery)))

console.log(products)


let finalproducts = products.filter(product => product.option === "special")

console.log(finalproducts)