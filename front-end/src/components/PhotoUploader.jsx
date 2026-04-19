import React from 'react';
import axios from 'axios';

const PhotoUploader = ({ photoLink, setPhotoLink, setPhotos, photos }) => {

    const uploadByLink = async (e) => {
        e.preventDefault();
        // const campo = document.getElementById('photlink')

        if (photoLink) {
            const { data: filename } = await axios.post("/places/upload/link", {
                link: photoLink
            });

            console.log(filename);

            // const { filename } = data;
            setPhotos((prevValue) => [...prevValue, filename]);
            setPhotoLink('');
        } else {
            alert('Não existe link a ser enviado');

        }

    };

    return (

        <div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='photos' className='ml-2 text-2xl font-bold'>Fotos</label>
                <div className='flex gap-2'>
                    <input type="text"
                        placeholder='Adicione uma foto pelo link'
                        className='rounded-full border border-gray-300 px-4 py-2 grow'
                        value={photoLink}
                        id='photolink'
                        onChange={(e) => setPhotoLink(e.target.value)} />
                    <button onClick={uploadByLink} className='hover:bg-gray-200 rounded-full border border-gray-300 px-4 py-2 bg-gray-100 cursor-pointer transition'> Enviar foto</button>
                </div>
            </div>

            <div className='mt-2 grid grid-cols-5 gap-4'>

                {photos.map((photo) => (
                    <img className='aspect-square object-cover rounded-2xl'
                        src={`${axios.defaults.baseURL}/tmp/${photo}`}
                        alt='imagens do lugar'
                        key={photo} />

                ))}

                <label htmlFor="file" className='flex  aspect-square cursor-pointer items-center gap-2 rounded-2xl border border-gray-300 justify-center'>
                    <input type="file" id="file" hidden />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    Upload
                </label>
            </div>
        </div>

    );
};

export default PhotoUploader;