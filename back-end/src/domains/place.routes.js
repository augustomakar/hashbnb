import { Router } from 'express';
import Place from './../models/place.model.js';
import { JWTVerify } from '../utils/jwt.js';

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

export default router;
