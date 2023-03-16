const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    personals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Personal" }],
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const PersonalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    department: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true },
    store_id: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductSchmea = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    store_id: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

exports.Personal = mongoose.model("Personal", PersonalSchema);
exports.Store = mongoose.model("Store", StoreSchema);
exports.Product = mongoose.model("Product", ProductSchmea);
