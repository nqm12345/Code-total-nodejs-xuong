import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
    },
    
    hide: {
        type: Boolean,
        default: false,
    },

    discountPercent: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
      },
      brand: {
        type: String,
        default: "No brand",
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        default: "661010852c84b632f653efc4",
        ref: "Category",
      },
      thumbnail: {
        type: String,
        default: "",
      },
      images: {
        type: [String],
        default: [],
      },
    
}, {
    timestamps: true,
    versionKey: false
})
export default mongoose.model("Product", productSchema);