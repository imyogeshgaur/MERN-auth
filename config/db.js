const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://yogesh:yogesh@cluster0.5upm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
