const { Store } = require("../schema/mongoose");
const joiSchema = require("../schema/joi");

const storeList = async (req, res, next) => {
  try {
    let stores = await Store.find().populate("products personals");
    return res.json(stores);
  } catch (error) {
    next({ message: "Something went wrong!", error: error.stack });
  }
};

const newStore = async (req, res, next) => {
  try {
    const { error } = joiSchema.store.validate(req.body);
    if (error) return res.status(400).json({ error });
    const { name, address, phone } = req.body;
    let newStore = new Store({ name, address, phone });
    newStore = await newStore.save();
    return res.status(201).json({ message: "Successful!", StoreID: newStore._id.toString() });
  } catch (error) {
    next({ message: "Something went wrong!", error: error.stack });
  }
};

module.exports = { storeList, newStore };
