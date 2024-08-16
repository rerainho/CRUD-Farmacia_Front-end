import React, { useContext } from 'react';


import { Link, useNavigate } from 'react-router-dom';

import HomeLogo from './HomeLogo.png'

import ListaCategorias from '../../components/Categorias/ListarCategoria/ListaCategoria';
import FormularioCategoria from '../../components/Categorias/FormularioCategoria/FormularioCategoria';





export default function Home() {

  return (
      <>
    <div className="bg-[#753219] flex justify-center">
          <div className='container grid grid-cols-2 text-[#e08025]'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Olá cliente Farmais!</h2>
              <p className='text-xl'>Nossa gama de produtos</p>
               
              <div className="flex justify-around gap-4">
              <FormularioCategoria />
              <Link to={''}><button className='rounded hover:text-[#FEFCDD] bg-[#e08025] text-[#753219] py-2 px-4'>Ver produtos</button></Link>
            </div>
            </div>
  
            <div className="flex justify-center ">
            <img className='w-2/3' src={HomeLogo} alt="Mulher se comunicando"  />
      
            </div>
          </div>
        </div>
        <ListaCategorias />
      </>
    );
}      



