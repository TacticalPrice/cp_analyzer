const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://root:root@atlascluster.pigtrrd.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            //useCreateIndex: true
        });
        console.log('MongoDB connected successfully');
    }catch(e){
        console.error('MongoDB connection failed:' , e.message);
        process.exit(1);
    }
};

module.exports = { connectDB };

