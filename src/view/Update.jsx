import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () =>{
    const [livro, setLivro] = useState({
        nome:"",
        descricao:"",
        img:"",
        preco:"",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const livroId = location.pathname.split("/")[2]

    const formChange = (e) =>{
        setLivro((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const formBtnClick = async e =>{
        e.preventDefault()
        try {
           await axios.put("http://localhost:8800/livros/" + livroId, livro ) 
            navigate("/livros")
        } catch (err) {
            console.log(err)
        }
    }
    console.log(livro)
    return(
        <div className='form'>
           <h1>Atualizar Livro</h1> 
           <input type="text" placeholder="nome" onChange={formChange} name="nome"/>
           <input type="text" placeholder="descrição" onChange={formChange} name="descricao"/>
           <input type="text" placeholder="imagem" onChange={formChange} name="img"/>
           <input type="text" placeholder="preço" onChange={formChange} name="preco"/>
            <button className="formBtn" onClick={formBtnClick}>ATUALIZAR</button>
        </div>
    )
}

export default Update