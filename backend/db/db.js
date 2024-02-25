const mongoose = require('mongoose');

const url = "mongodb+srv://kb00664422:c7ftZoq7nTSPgw4f@cluster0.pgimxcr.mongodb.net/depresison";

const connectMongo = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectMongo;
