
const { v4: uuidv4 } = require('uuid');

let products = [];

 const createProduct = (req, res) => {
  const product = req.body;

  products.push({ ...product, id: uuidv4() });

  res.send(`Product with the name ${product.name} added to the database!`);
}

 const getAllProducts = (req, res) => {
    res.send(products); 
}

 const getProductbyID = (req, res) => {
  const { id } = req.params;

  const foundProduct = products.find((p) => p.id === id);
  
  res.send(foundProduct);
}

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, inStock } = req.body;
  
  const product = products.find((product) => product.id === id);

  if (name) product.name = name;

  if (description) product.description = description;

  if (price) product.price = price;

  if (category) product.category = category;

  if (inStock) product.inStock = inStock;

  res.send(`Product with the id ${id} has been updated`);

}

 const deleteProduct = (req, res) => {
  const { id } = req.params;

  products = products.filter((product) => product.id !== id);

  res.send(`Product with the id ${id} deleted from the database.`);
}

module.exports = { createProduct, getAllProducts, getProductbyID, updateProduct, deleteProduct };