import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  category: { type: String, required: true, enum: ["software", "amenity"] },
  subCategory: { type: String},
  title: { type: String, required: true },
  type: { type: String, defaultValue: "" },
  addressPicture: { type: String, defaultValue: "" },
  price: { type: Number, defaultValue: 0 },
  discountPrice: { type: Number, defaultValue: 0 },
  duration: { type: String, defaultValue: "" },
  isAvailable: { type: Boolean, required: true },
  isShowToUser: { type: Boolean, required: true },
  descriptionProduct: { type: String, defaultValue: "" },
  howToActivation: [
    {
      id: { type: Number, required: true },
      description: { type: String, defaultValue: "" },
      image: { type: String, defaultValue: "" },
    },
  ],
  reviews: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      email: { type: String, required: true },
      commentUser: { type: String },
      answerAdmin: { type: String },
      rate: { type: Number, required: true, min: 1, max: 5 },
      createdAt: { type: Date, default: () => Date.now(), immutable: true },
    },
  ],
  conclusionRates: {
    sumRates: { type: Number },
    sumUsers: { type: Number },
    averageRate: { type: Number },
  },
  createdAt: { type: Date, default: () => Date.now(), imutable: true },
  updatedAt: { type: Date, default: () => Date.now(), imutable: true },
});
const Product = models.Product || model("Product", productSchema);

export default Product;
