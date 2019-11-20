"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: {
    type: String
  },
  price: {
    type: String
  },
  name: {
    type: String
  },
  category: {
    type: String
  },
  img: {
    type: String
  }
});

module.exports = mongoose.model("Product", ProductSchema);
