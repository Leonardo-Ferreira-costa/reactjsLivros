import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const Livros = () =>{
    const [livros,setLivros] = useState([])

    useEffect(()=>{
        const fetchAllLivros = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/livros")
                setLivros(res.data);
                console.log(res.data[0].nome)

            }catch(err){
                console.log(err)
            }
        }
        fetchAllLivros()
    }, [])

    const delLivro = async (id)=>{
        try {
            await axios.delete("http://localhost:8800/livros/"+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
            
        }
    }
    return(
        <div>
            <h1>Livrateria</h1>
            <div className="livros">
            
                {livros.map((livro) => (
                    <div className="livro" key={livro.id}>
                        {livro.img && <img src={`./livros/${livro.img}`} alt="" />}
                        <h2>{livro.nome}</h2>
                        <p>{livro.descricao}</p>
                        <span>{livro.preco}</span>
                        <button className="delete" onClick={()=>delLivro(livro.id)}>DELETAR</button>
                        <button className="atualizar"><Link to={`/atualizar/${livro.id}`}>ATUALIZAR</Link></button>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/adicionar">NOVO LIVRO</Link>
            </button>
        
        </div>
    )
}

export default Livros
