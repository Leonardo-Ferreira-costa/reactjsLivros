import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () =>{
    const [livro, setLivro] = useState({
        nome:"",
        descricao:"",
        img:"",
        preco:"",
    });

    const navigate = useNavigate()

    const formChange = (e) =>{
        setLivro((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const formBtnClick = async e =>{
        e.preventDefault()
        try {
           await axios.post("http://localhost:8800/livros", livro ) 
            navigate("/livros")
        } catch (err) {
            console.log(err)
        }
    }
    console.log(livro)
    return(
        <div className='form'>
           <h1>Adicionar Novo Livro</h1> 
           <input type="text" placeholder="nome" onChange={formChange} name="nome"/>
           <input type="text" placeholder="descrição" onChange={formChange} name="descricao"/>
           <input type="text" placeholder="imagem" onChange={formChange} name="img"/>
           <input type="text" placeholder="preço" onChange={formChange} name="preco"/>
            <button onClick={formBtnClick}>ADICIONAR</button>
        </div>
    )
}

export default Add