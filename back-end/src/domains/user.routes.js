import express from 'express';
import userModel from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { JWTVerify, JWTSign } from '../utils/jwt.js';

const router = express.Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

router.get('/', async (req, res) => {
	try {
		const user = await userModel.find();
		res.json({ msg: user }).status(200);
	} catch (error) {
		res.json({ msg: 'ERRO' }).status(500);
	}
});

router.get('/profile', async (req, res) => {
	const userInfo = await JWTVerify(req);
	console.log(userInfo);
	res.json(userInfo);
});

router.post('/', async (req, res) => {
	const { name, email, password } = req.body;
	const passwordEncrypted = bcrypt.hashSync(password, bcryptSalt);

	try {
		const newUserDoc = await userModel.create({
			name,
			email,
			password: passwordEncrypted,
		});

		const { _id } = newUserDoc;
		const newUserObj = { name, email, _id };
		// const token = jwt.sign(newUserObj, JWT_SECRET_KEY);

		try {
			const token = await JWTSign(newUserObj);
			res.cookie('token', token).json(newUserObj);
		} catch (error) {
			res.status(500).json('erro ao assinar com o JWT: ', error);
		}
	} catch (error) {
		res.status(500).json({ msg: 'error', erro: error });
	}
});

router.use('/login', async (req, res) => {
	const { email, password } = req.body;
	try {
		const userDoc = await userModel.findOne({ email });
		const { _id, name } = userDoc;
		if (userDoc) {
			const passwordCorrect = bcrypt.compareSync(
				password,
				userDoc.password
			);
			if (passwordCorrect) {
				const newUserObj = { name, email, _id };

				try {
					const token = await JWTSign(newUserObj);
					res.status(201).cookie('token', token).json(newUserObj);
				} catch (error) {
					res.status(500).json('erro ao assinar com o JWT: ', error);
				}
			} else {
				res.status(400).json('senha invalida');
			}
		} else {
			res.status(400).json('usuário não encontrado');
		}
	} catch (error) {
		res.status(500).json({ msg: 'error', erro: error });
	}
});

router.post('/logout', (req, res) => {
	res.clearCookie('token').json('deslogado com sucesso');
});

export default router;
