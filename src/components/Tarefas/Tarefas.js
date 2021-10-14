import React from 'react'
import { TarefaContainer } from '../../styled/TarefasStyled/tarefasStyled'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import api from '../../services/api'

const Tarefas = ({data}) => {

    const deleteTarefa = async (_id) => {
        if(window.confirm("Apagar essa tarefa ?")){
            const response = await api.delete(`tarefa-delete/${_id}`)
            if(response.status === 200){
                window.location.href = "/"
            }
        }
    }

    return(
        <TarefaContainer>
                <li className="card">
                    <div className="head">
                        <span>{data.titulo_tarefa}</span>
                        <div className="delete" onClick={() => deleteTarefa(data._id)}>
                            <AiFillDelete />
                        </div>
                    </div>
                    <div className="text">
                        <textarea disabled value = {data.descricao_tarefa}></textarea>
                    </div>
                    <div className="bottom">
                        <a href={"/edit/"+data._id}><FaEdit className="edit"/></a>
                    </div>
                </li>
        </TarefaContainer>
    )
}

export default Tarefas