import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Navbar() {
  return (
    <>
      <div className="w-full bg-[#e08025] text-[#753219] flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">
            <Link
              to="/home"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Farmais 
            </Link>
          </div>

          <div style={{ paddingLeft: "115px" }}></div>

          <div className="flex gap-4">
            <Link
              to="/home"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Home
            </Link>
        
            <Link
              to="/produtos"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Produtos
            </Link>
            <Link
              to="/categorias"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Categoria
            </Link>
            <Link
              to="/cadastrarCategorias"
              className="hover:text-[#FEFCDD] transition-colors duration-300"
            >
              Cadastro
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

 