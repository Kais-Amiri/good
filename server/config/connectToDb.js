const monggose = require("mongoose");

const connectToDb = async () => {
  try {
    await monggose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected successfully...!!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;
