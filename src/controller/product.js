const mongoose = require("mongoose");
const { Product, Store } = require("../schema/mongoose");
const joiSchema = require("../schema/joi");

module.exports = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { error } = joiSchema.product.validate(req.body);
    if (error) return res.status(400).json({ error });
    const { name, description, price, stock, store_id } = req.body;
    let product = new Product({ name, description, price, stock, store_id });
    product = await product.save({ session });
    await Store.findOneAndUpdate({ _id: store_id }, { $push: { products: product._id } }, { session });
    await session.commitTransaction();
    res.status(201).json({ message: "Successful!", StoreID: product._id.toString() });
  } catch (error) {
    await session.abortTransaction();
    next({ message: "Something went wrong!", error: error.stack });
  }
};
