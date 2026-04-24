import mongoose from "mongoose";

const birthInfoSchema = new mongoose.Schema({
  // to update/add/change stuff later, do it here. like an email. add a comma after string, hit enter, add email: String
  name: String,
  date: Date,
  location: String
});

const BirthInfo = mongoose.model("BirthInfo", birthInfoSchema);

export default BirthInfo;
