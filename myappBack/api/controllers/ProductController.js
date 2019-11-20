'use strict';

var mongoose = require('mongoose'),
	Product = mongoose.model('Product');
var products = require('../../data/products');
exports.list_all_products = function(req, res) {
	//console.warn('dfdfgdfg');
	// Product.find({}, function(err, product) {
	// 	if (err) res.send(err);
	res.json(products);
	// });
};

exports.create_a_product = function(req, res) {
	var new_product = new Product(req.body);
	new_product.save(function(err, product) {
		if (err) res.send(err);
		res.json(product);
	});
};

exports.read_a_product = function(req, res) {
	console.warn(req.params);
	const foundProduct = products.find(product => product.id === Number(req.params.productId));
	if (!foundProduct) {
		res.send({ err: 'Product is not found' });
	} else {
		res.json(foundProduct);
	}
};

exports.update_a_product = function(req, res) {
	var indexProductToUpdate = products.findIndex(product => product.id == Number(req.params.productId));
	if (indexProductToUpdate == -1) {
		res.send({ err: 'Product is not found' });
	} else {
		var oldProduct = products[indexProductToUpdate];
		products[indexProductToUpdate] = {
			id: oldProduct.id,
			name: req.body.name ? req.body.name : oldProduct.name,
			price: req.body.price ? req.body.price : oldProduct.price,
			title: req.body.title ? req.body.title : oldProduct.title,
			category: req.body.category ? req.body.category : oldProduct.category,
			img: req.body.img ? req.body.img : oldProduct.img,
		};
		res.json(products[indexProductToUpdate]);
	}
};

exports.delete_a_product = function(req, res) {
	var indexProductToRemove = products.findIndex(product => product.id == Number(req.params.productId));
	if (indexProductToRemove == -1) {
		res.send({ err: 'Product is not found' });
	} else {
		products.splice(indexProductToRemove, 1);
		res.json(products);
	}
};

exports.filterByCategory = function(req, res) {
	const foundProducts = [];
	products.map(product => {
		if (product.category === req.params.value) {
			foundProducts.push(product);
		}
	});
	if (!foundProducts) {
		res.send({});
	} else {
		res.json(foundProducts);
	}
};
