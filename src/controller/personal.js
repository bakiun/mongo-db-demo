const mongoose = require("mongoose");
const { Personal, Store } = require("../schema/mongoose");
const joiSchema = require("../schema/joi");

module.exports = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { error } = joiSchema.personal.validate(req.body);
    if (error) return res.status(400).json({ error });
    const { name, age, department, phone, store_id } = req.body;
    let person = new Personal({ name, age, department, phone, store_id });
    person = await person.save({ session });
    await Store.findOneAndUpdate({ _id: store_id }, { $push: { personals: person._id } }, { session });
    await session.commitTransaction();
    res.status(201).json({ message: "Successful!", PersonalID: person._id.toString() });
  } catch (error) {
    await session.abortTransaction();
    next({ message: "Something went wrong!", error: error.stack });
  }
};
