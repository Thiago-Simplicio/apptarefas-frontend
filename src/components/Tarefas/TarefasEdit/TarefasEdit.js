import React,{useEffect,useState} from 'react'
import api from '../../../services/api'
import { ContainerEdit } from '../../../styled/TarefasStyled/tarefasStyledEdit'
import {AiFillCaretLeft} from 'react-icons/ai'
import {useParams} from 'react-router-dom'

const TarefasEdit = () => {

    const [titulo_tarefa, setTitulo] = useState('')
    const [descricao_tarefa, setDescricao] = useState('')
    const {_id} = useParams()

    useEffect(() => {
        const getTarefa = async () => {
            const response = await api.get('/edit/'+_id)
            setTitulo(response.data.titulo_tarefa)
            setDescricao(response.data.descricao_tarefa)
        }
        getTarefa()
    },[])

    const handleEdit = async () => {
        try{
            const response = await api.put(`/edit-tarefa/${_id}`,{
                titulo_tarefa,
                descricao_tarefa
            })
            window.location.href = "/"
            alert("Tarefa atualizado com sucesso")
        }
        catch(error){
            alert("Erro ao atualizar tarefa")
        }
    }

    const back = () => {
        window.location.href = "/"
    }

    return(
        <ContainerEdit>
            <div className="voltar" onClick={() => back()}>
                <AiFillCaretLeft />
            </div>
            <div className="card">
                <form onSubmit={() => handleEdit()}>
                    <div className="head">
                        <input onChange={(e) => setTitulo(e.target.value)} value = {titulo_tarefa.toUpperCase()}/>
                    </div>
                    <div className="text">
                        <textarea onChange={(e) => setDescricao(e.target.value)} value = {descricao_tarefa}></textarea>
                    </div>
                    <div className="bottom">
                        <button>Salvar Tarefa</button>
                    </div>
                </form>
            </div>
        </ContainerEdit>
    )
}

export default TarefasEdit