// import { MongoClient } from 'mongodb';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import chalk from 'chalk';

configDotenv();
const { MONGO_URI } = process.env;

// ######### conexão com MONGODB #########
// async function connectDB() {
// 	const client = new MongoClient(MONGO_URI);

// 	try {
// 		// Connect the client to the server	(optional starting in v4.7)
// 		await client.connect();
// 		// Send a ping to confirm a successful connection
// 		// await client.db('admin').command({ ping: 1 });
// 		console.log('conectado ao DB');
// 		// 'Pinged your deployment. You successfully connected to MongoDB!'
// 		// );
// 	} finally {
// 		// Ensures that the client will close when you finish/error
// 		await client.close();
// 	}
// }

// ######### conexão com MONGOOSE #########
export const connectDB = async () => {
	await mongoose
		.connect(MONGO_URI)
		.then(() => console.log(chalk.green.bold('MONGODB Connected!')))
		.catch(error => console.error(chalk.red.bold('ERRO: ' + error)));
};
