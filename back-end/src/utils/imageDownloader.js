import download from 'image-downloader';
import mime from 'mime-types';

export const downloadImage = async (link, destination) => {
	const mimeType = mime.lookup(link);
	const contentType = mime.contentType(mimeType);
	const extension = mime.extension(contentType);

	const filename = `${Date.now()}.${extension}`;
	const fullPath = `${destination}${filename}`;

	const options = {
		url: link,
		dest: fullPath,
	};

	try {
		await download.image(options);
		console.log('Saved to', fullPath);
		return filename;
	} catch (error) {
		console.error(error);
		throw error;
	}

	// sintaxe original

	// download
	// 	.image(options)
	// 	.then(({ filename }) => {
	// 		console.log('Saved to', filename); // saved to /path/to/dest/photo.jpg
	// 	})
	// 	.catch(err => console.error(err));
};
