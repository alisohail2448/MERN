import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL =
    `mongodb://${username}:${password}@ecommerceweb-shard-00-00.ucayk.mongodb.net:27017,ecommerceweb-shard-00-01.ucayk.mongodb.net:27017,ecommerceweb-shard-00-02.ucayk.mongodb.net:27017/eCommerce?ssl=true&replicaSet=atlas-crxeh4-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected succesfully`);
  } catch (error) {
    console.log(`Error: `, error.message);
  }
};

export default Connection;
