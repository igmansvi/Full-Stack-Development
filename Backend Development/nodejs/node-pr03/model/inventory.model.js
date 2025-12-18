import mongoose from "mongoose";

const inventorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Inventory = mongoose.model("inventory", inventorySchema);
export default Inventory;