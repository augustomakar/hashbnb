import express from 'express';
import userModel from '../../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

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
	const { token } = req.cookies;

	if (token) {
		jwt.verify(token, process.env.JWT_SECRET_KEY, {}, (error, userInfo) => {
			if (error) throw error;
			res.json(userInfo).status(200);
		});
	} else {
		res.json(null).status(200);
	}
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

		jwt.sign(newUserObj, JWT_SECRET_KEY, {}, (error, token) => {
			if (error) throw error;
			res.cookie('token', token).json(newUserObj);
		});
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
				const token = jwt.sign(newUserObj, JWT_SECRET_KEY);

				console.log({ token, JWT_SECRET_KEY });

				res.status(201).cookie('token', token).json(newUserObj);
				// res.status(200).cookie(token).json(newUserObj);
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
