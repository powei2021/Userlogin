const mongoose = require("mongoose");
module.exports = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(":::> Connected toMongoDB")
    }catch (error) {
       console.log("::::> Error connecting to MongoDB: ", error.message)
        throw new Error(error.message);
    }
}