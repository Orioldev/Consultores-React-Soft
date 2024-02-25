import { getAuth } from 'firebase/auth';
import React from 'react';
import data from '../data/data';
import { MdLocationOn } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { MdAttachEmail } from 'react-icons/md';

export const Home = () => {

  const auth = getAuth();
  const userCurrent = auth.currentUser.displayName;

  return (
    <div className='bg-gray-50 border-b top-0'>
      <h1 className='text-3xl text-center text-blue-600 py-10 font-bold'>Bienvenido { userCurrent }! </h1>
      <p className='text-center mt-5 font-semibold' >Hola { userCurrent }, aqui te presentamos una gama de softwares y aplicaciones que te brindaran una solucion administrativa a tu negocio. </p>
      
      <section className=' max-w-6xl mx-auto mt-6 px-6 py-6'>
          {
            data.map( ( { id, title, description, type, image, contact, emailContact, price } ) => (
              <div key={ id } className='bg-white flex items-center justify-center px-5 py-5 mt-12 h-100 shadow-md rounded-md mx-auto w-full border-gray-400'>
                <div className='image-container h-[150px] m-4'>
                  <img src={ image } alt={ title } className=' w-[170px]' />
                </div>
                <div className='info-container'>
                    <div className='text-soft'>
                        <h3 className='text-2xl font-bold mt-2 mb-3 sm:text-xl flex'> <MdLocationOn className='text-red-500'/> { title } </h3>
                        <hr />
                        <p className='mb-5 flex-wrap' > { description } </p>
                        <span className='text-2xl font-bold'> { price }$ <b className='font-light text-xl'>/ mes</b> </span> 
                    </div>
                    <div className='info-soft flex justify-between flex-wrap mt-6'>
                        <a target='_blank' href={`https://wa.me/${ contact }?text=Hola,%20estoy%20interesado%20en%20tu%20producto`} className='bg-green-600 text-white px-2 py-1 rounded-lg font-bold m-1 items-center flex'> 
                          <FaWhatsapp  className='text-2xl'/>
                           Contacto 
                        </a>

                        <a  href={`mailto:${ emailContact }`} target='_blank' className='bg-blue-600 text-white px-2 py-1 rounded-lg font-bold m-1 flex'> 
                          <MdAttachEmail className='text-2xl' />
                           Correo 
                        </a>

                        <span className='bg-gray-400 text-white px-2 py-1 rounded-lg font-bold m-1'> { type } </span>
                    </div>
                </div>
              </div>
            ))
          }
      </section>
    </div>
  )
}
