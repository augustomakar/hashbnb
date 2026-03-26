import React, { useState } from 'react';
import Perks from './Perks';

const NewPlace = () => {

    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const [photos, setPhotos] = useState('');
    const [description, setDescription] = useState('');
    const [extras, setExtras] = useState('');
    const [price, setPrice] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [guests, setGuests] = useState('');

    const handleSubmit = (event) => {
        // event.preventDefault();

        // const newPlace = await axios.post('/places',{

        // });
    };

    return (
        <form onSubmit={handleSubmit} className='w-full flex-col flex gap-6 px-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='title' className='ml-2 text-2xl font-bold'>Titulo</label>
                <input type="text"
                    placeholder='Digite o titulo do seu anuncio'
                    className='rounded-full border border-gray-300 px-4 py-2'
                    value={title}
                    id='title'
                    onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='city' className='ml-2 text-2xl font-bold'>Cidade e País</label>
                <input type="text"
                    placeholder='Digite a cidade do seu anuncio'
                    className='rounded-full border border-gray-300 px-4 py-2'
                    value={city}
                    id='city'
                    onChange={(e) => setCity(e.target.value)} />
            </div >

            <div className='flex flex-col gap-1'>
                <label htmlFor='photos' className='ml-2 text-2xl font-bold'>Fotos</label>
                <div className='flex gap-2'>
                    <input type="text"
                        placeholder='Adicione uma foto pelo link'
                        className='rounded-full border border-gray-300 px-4 py-2 grow'
                        value={photos}
                        id='photos'
                        onChange={(e) => setPhotos(e.target.value)} />
                    <button className='hover:bg-gray-200 rounded-full border border-gray-300 px-4 py-2 bg-gray-100 cursor-pointer transition'> Enviar foto</button>
                </div>
            </div>

            <div className='mt-2 grid grid-cols-5 gap-4'>
                <label htmlFor="file" className='flex  aspect-square cursor-pointer items-center gap-2 rounded-2xl border border-gray-300 justify-center'>
                    <input type="file" id="file" hidden />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    Upload
                </label>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='description' className='ml-2 text-2xl font-bold'>Descrição</label>
                <textarea
                    placeholder='Digite o titulo do seu anuncio'
                    className='rounded-2xl border border-gray-300 px-4 py-2 h-56 resize-none'
                    value={description}
                    id='description'
                    onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='perks' className='ml-2 text-2xl font-bold'>Comodidades</label>
                <Perks />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='extras' className='ml-2 text-2xl font-bold'>Informações Extras</label>
                <textarea
                    placeholder='Digite o titulo do seu anuncio'
                    className='rounded-2xl border border-gray-300 px-4 py-2 h-56 resize-none'
                    value={extras}
                    id='extras'
                    onChange={(e) => setExtras(e.target.value)} />
            </div>



            <div className='flex flex-col gap-1'>
                <h2 htmlFor='photos' className='ml-2 text-2xl font-bold'>Restrições e Preços</h2>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="price" className='ml-2 text-xl font-bold'>Preço</label>
                        <input type="number"
                            placeholder='500'
                            className='rounded-full border border-gray-300 px-4 py-2 grow'
                            value={price}
                            id='price'
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="checkin" className='ml-2 text-xl font-bold'>Check-in</label>
                        <input type="text"
                            placeholder='16:00'
                            className='rounded-full border border-gray-300 px-4 py-2 grow'
                            value={checkin}
                            id='checkin'
                            onChange={(e) => setCheckin(e.target.value)} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="checkout" className='ml-2 text-xl font-bold'>Check-out</label>
                        <input type="text"
                            placeholder='12:00'
                            className='rounded-full border border-gray-300 px-4 py-2 grow'
                            value={checkout}
                            id='checkout'
                            onChange={(e) => setCheckout(e.target.value)} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="guests" className='ml-2 text-xl font-bold'>Nº Convidados</label>
                        <input type="number"
                            placeholder='4'
                            className='rounded-full border border-gray-300 px-4 py-2 grow'
                            value={guests}
                            id='guests'
                            onChange={(e) => setGuests(e.target.value)} />
                    </div>
                </div>
            </div>



            <button className=' hover:bg-primary-600 bg-primary-400 rounded-full px-4 py-2 text-white transition min-w-44 cursor-pointer'>
                Salvar Informações
            </button>


        </form >
    );
};

export default NewPlace;