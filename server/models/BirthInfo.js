import mongoose from "mongoose";

const birthInfoSchema = new mongoose.Schema(
  {
    name: String,
    day: String,
    month: String,
    year: String,
    hour: String,
    minute: String,
    location: String,
    constellations: [{}]
  },
  { timestamps: true }
);

const BirthInfo = mongoose.model("BirthInfo", birthInfoSchema);

export default BirthInfo;
