import dns from 'dns';
import express from 'express';
import dotenv from 'dotenv';
// import 'dotenv/config'
// => forma alternatina, não precisa chamar a função
import { configDotenv } from 'dotenv';
import { connectDB } from './src/db/connectDB.js';
import chalk from 'chalk';
import userRouter from './src/domains/user/user.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dns.setServers(['1.1.1.1', '8.8.8.8']);

configDotenv();
const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
);

app.use('/users', userRouter);

try {
	await connectDB();
	app.listen(PORT, () => {
		console.log(chalk.green.bold(`Server running in port ${PORT}`));
	});
} catch (error) {
	console.error(chalk.red.bold('erro:' + error));
}
