import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/college');
    console.log(`Mongo Connected`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;