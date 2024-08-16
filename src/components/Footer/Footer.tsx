// import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
 
  At,
  
} from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'

export default function Footer() {
  return (
     <>
      <div className="flex justify-center bg-[#e08025] text-[#753219]">
        <div className="container flex flex-col items-center py-4">
          <Link
            to="/about"
            className="hover:text-[#FEFCDD] transition-colors duration-300"
          >
            Sobre nós
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#FEFCDD] transition-colors duration-300"
          >
            Nossas unidades 
          </Link>

          <div>
            <p className="text-lg">Acesse nosso e-mail:</p>
          </div>
          <div className="flex gap-2">
            <a
              className="hover:text-[#FEFCDD] transition-colors duration-300"
              href="https://linktr.ee/rainhore"
              target="_blank"
            >
              <At size={40} weight="bold" />
            </a>
            </div>
          <div>
            <p className="text-xl font-light">
              Farmais | Copyright: Farmácia mais e cia{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

