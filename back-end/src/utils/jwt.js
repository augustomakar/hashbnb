import { configDotenv } from 'dotenv';
import jwt from 'jsonwebtoken';

configDotenv();

export const JWTVerify = async req => {
	const { token } = req.cookies;

	if (token) {
		return new Promise((resolve, reject) => {
			jwt.verify(
				token,
				process.env.JWT_SECRET_KEY,
				{},
				(error, userInfo) => {
					if (error) {
						console.error(
							'Deu um erro ao verificar o JWT: ',
							error
						);
						throw error;
						reject(error);
					}
					resolve(userInfo);
				}
			);
		});
	} else {
		return null;
	}
};

export const JWTSign = async newUserObj => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			newUserObj,
			process.env.JWT_SECRET_KEY,
			{ expiresIn: '1d' },
			(error, token) => {
				if (error) {
					console.error('Deu um erro ao assinar o JWT: ', error);
					throw error;
					reject(error);
				}

				resolve(token);
			}
		);
	});
};
