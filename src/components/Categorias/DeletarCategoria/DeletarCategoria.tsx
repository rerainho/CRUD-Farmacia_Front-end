import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Categoria from '../../../Models/Categoria'
import { buscar, deletar } from '../../../Services/Service'

export default function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()


    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    // 'Authorization': token
                }
            })
        } catch (error: any) {
            alert(error);

            // if (error.toString().includes('403')) {
            //     toastAlerta('O token expirou, favor logar novamente', 'info')
            //     handleLogout()
            }
        }
    
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id])

  
    function retornar() {
        navigate("/categorias")
    }

    async function DeletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    // 'Authorization': token
                }
            })

            alert('Tema apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Tema')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={DeletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}



