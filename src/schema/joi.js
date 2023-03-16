const Joi = require("joi");

const store = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().min(10).required(),
  phone: Joi.string().regex(/^\d+$/).length(10).required(),
});

const personal = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(18).max(100).required(),
  department: Joi.string().required(),
  phone: Joi.string().regex(/^\d+$/).length(10).required(),
  store_id: Joi.string().required(),
});

const product = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().min(10).max(500).required(),
  stock: Joi.number().min(0),
  price: Joi.number().required(),
  store_id: Joi.string().required(),
});

module.exports = { store, personal, product };
