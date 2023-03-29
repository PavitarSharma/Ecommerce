import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("Databse connected");
    })
    .catch((error) => {
      console.log("Database connection error ", error);
    });
};

export default connectDatabase
