const mongoose = require('mongoose');
require('dotenv').config();

const connOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

const connectToDB = async () => {
	try {
		const connect = await mongoose.connect("mongodb+srv://vietvd:rNA8c4hnocPmJtrS@duck.6lxegcn.mongodb.net/", {
			...connOptions,
			connectTimeoutMS: 10000,
			socketTimeoutMS: 45000
		});
    
		if (connect) {
      console.log(`[Database connected]: ${connect.connection.host}`);
    }
	} catch (error) {
    console.log("[Database error]:", error);
	}
};

module.exports = { connectToDB };