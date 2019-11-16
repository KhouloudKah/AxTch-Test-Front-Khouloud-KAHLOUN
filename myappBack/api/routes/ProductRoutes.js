'use strict';
module.exports = function(app) {
  var product = require('../controllers/ProductController');

  app.route('/product')
    .get(product.list_all_products)
    .post(product.create_a_product);


  app.route('/product/:productId')
    .get(product.read_a_product)
    .put(product.update_a_product)
    .delete(product.delete_a_product);

app.route('/product/search/:value')
    .get(product.filterByCategory);
};
