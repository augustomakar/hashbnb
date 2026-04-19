import { Router } from 'express';
import Place from './../models/place.model.js';
import { JWTVerify } from '../utils/jwt.js';
import { downloadImage } from '../utils/imageDownloader.js';
import { __dirname } from '../../server.js';

const router = Router();

router.post('/', async (req, res) => {
	const {
		title,
		city,
		photos,
		description,
		extras,
		perks,
		price,
		checkin,
		checkout,
		guests,
	} = req.body;

	try {
		const { _id: owner } = await JWTVerify(req);

		const newPLaceDoc = await Place.create({
			owner,
			title,
			city,
			photos,
			description,
			extras,
			perks,
			price,
			checkin,
			checkout,
			guests,
		});
		res.json(newPLaceDoc).status(200);
	} catch (error) {
		console.error(error);
		res.status(500).json('deu erro ao criar novo local');
	}
});

router.post('/upload/link', async (req, res) => {
	const { link } = req.body;

	try {
		const filename = await downloadImage(link, `${__dirname}/tmp/`);
		console.log(filename);
		res.status(200).json(filename);
	} catch (error) {
		res.status(500).json('deu erro ao baixar imagem');
	}
});

export default router;
