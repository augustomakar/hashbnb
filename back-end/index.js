import dns from 'dns';
import express from 'express';
// import 'dotenv/config'
// => forma alternatina, não precisa chamar a função
import { configDotenv } from 'dotenv';
import { connectDB } from './src/db/connectDB.js';
import chalk from 'chalk';

import { app } from './server.js';

dns.setServers(['1.1.1.1', '8.8.8.8']);

configDotenv();

const { PORT } = process.env;

try {
	await connectDB();
	app.listen(PORT, () => {
		console.log(chalk.green.bold(`Server running in port ${PORT}`));
	});
} catch (error) {
	console.error(chalk.red.bold('erro:' + error));
}
