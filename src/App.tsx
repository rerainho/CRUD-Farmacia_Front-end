// Elemento JSX/TSX => Função que retorna HTML
//import Flex from "./components/Flex/Flex";
// import UserProvider from './Contexts/UserContext';
import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import axios from 'axios';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import 'react-toastify/dist/ReactToastify.css';
import ListaCategorias from './components/Categorias/ListarCategoria/ListaCategoria';
import FormularioCategoria from './components/Categorias/FormularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/Categorias/DeletarCategoria/DeletarCategoria';

// interface User {
// id: number;
// name: string;

// }

// export default function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
//             .then(response =>{
//               setUsers(response.data);
//             }).catch(error => {console.log(error);

//             })
//   },[])
export default function App() {
  return (
    <>
     
      <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] bg-[#e08025] text-[#753219]">  
        <Routes>
           <Route path="/" element={<Home />} /> 
           <Route path="/home" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/categorias" element={<ListaCategorias />} />
           <Route path="/editarCategoria/:id" element={<FormularioCategoria/>}></Route>
           <Route path="/cadastrarCategorias" element={<FormularioCategoria/>}></Route>
           <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>}></Route>
          
        </Routes>
         </div>
      <Footer />
    </BrowserRouter>
    
    
    </>
  );
}

