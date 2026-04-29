import mongoose from "mongoose";

const birthInfoSchema = new mongoose.Schema({
  name: String,
  birthDate: String,
  birthTime: String,
  location: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const BirthInfo = mongoose.model("BirthInfo", birthInfoSchema);

export default BirthInfo;
