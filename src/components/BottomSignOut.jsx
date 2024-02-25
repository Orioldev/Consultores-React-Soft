import { getAuth } from 'firebase/auth';
import React from 'react'
import { CiLogin } from 'react-icons/ci';
import { MdSupportAgent } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

export const BottomSignOut = () => {


    const auth = getAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        auth.signOut();
        navigate('/');
    }

  return (
    <div className='flex items-center'>
      <Link className='flex items-center mr-1 mt-2 mb-2 bg-blue-600 px-2 py-2 rounded
                          text-white ml-3 hover:bg-blue-900
                          transition duration-200 ease-in-out 
                          cursor-pointer' 
            to='/soporte'
      
      >
        <span className='font-bold'>Soporte</span>
        <MdSupportAgent className='text-2xl ml-2 rounded text-white font-bold' />
        
      </Link>

      <button className='flex items-center mr-1 mt-2 mb-2 bg-red-600 px-2 py-2 rounded
                          text-white ml-3 hover:bg-red-800
                          transition duration-200 ease-in-out 
                          cursor-pointer'
              type='button'
              onClick={ onLogout }
      >
          <span className='font-bold'>Salir</span>
          <CiLogin className='text-2xl ml-2 rounded text-white font-bold'/>
      </button>
    </div>
  )
}
