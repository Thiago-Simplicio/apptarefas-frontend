import React,{useEffect,useState} from "react";
import { HomeContainer } from "../../styled/HomeStyled/homeStyled";
import {GrAdd} from 'react-icons/gr'
import Tarefas from "../Tarefas/Tarefas";
import {BsCloudMoonFill, BsFillSunFill} from 'react-icons/bs'
import api from '../../services/api'

const Home = () => {

    const [titulo_tarefa, setTitulo] = useState('')
    const [descricao_tarefa, setDescricao] = useState('')
    const [tarefas, setTarefas] = useState([])
    const [loading, setLoading] = useState([])
    const [cor, setCor] = useState(false)

    useEffect(() => {
        const findTask = async () => {
            try{
                const response = await api.get('/tarefas')
                setTarefas(response.data)
                setLoading(response.data)
            }
            catch(error){
                alert("Erro ao carregar tarefas")
            }
        }
        findTask()
    },[])

    const handleChange = ({target}) => {
        if(!target.value){
            setTarefas(loading)
            return
        }
        const findtarefa = tarefas.filter(({titulo_tarefa}) => titulo_tarefa.includes(target.value.toUpperCase()))
        setTarefas(findtarefa)
    }

    const handleSubmit = async () => {
        try{
            const response = await api.post('/tarefa-create',{
                titulo_tarefa,
                descricao_tarefa
            })
            setTitulo('')
            setDescricao('')
        }
        catch(error){
            alert("Erro ao criar tarefa "+error)
        }
    }

    const OpenAside = () => {
        const aside = document.querySelector('.containerAside')
        aside.style.display = "flex"
    }
    const CloseAside = () => {
        const fechar = document.querySelector('.containerAside')
        fechar.style.display = "none"
    }

    useEffect(() => {
        const blockbtn = () => {
            const btn = document.querySelector('.salvar')
            if(!titulo_tarefa || !descricao_tarefa){
                btn.style.backgroundColor = '#8D258D'
                btn.style.cursor = 'not-allowed'
                btn.style.opacity = '0.4'
            }else{
                btn.style.backgroundColor = 'rebeccapurple'
                btn.style.opacity = '1'
                btn.style.cursor = 'pointer'
            }
        }
        blockbtn()
    },[titulo_tarefa,descricao_tarefa])

    return(
        <HomeContainer className="container">
            {
                tarefas.length > 0
                ?
                null
                : <h1>Anotações de Tarefas</h1>
            }
            <div className="busca">
                <input onChange={handleChange} placeholder="Procurar Tarefa/Titulo"/>
            </div>
            <div className="containerAside">
                <div className="fechar" onClick={() => CloseAside()}>
                    <span>Fechar</span>
                </div>
                <div className="aside">
                    <form onSubmit={() => handleSubmit()}>
                        <div className="field">
                            <input 
                                placeholder="Titulo da Tarefa"
                                value = {titulo_tarefa}
                                onChange = {(e) => setTitulo(e.target.value.toUpperCase())}
                            />
                        </div>
                        <div className="field">
                            <textarea 
                                placeholder="Descrição"
                                value = {descricao_tarefa}
                                onChange = {(e) => setDescricao(e.target.value)}
                            />
                        </div>
                        <div className="button">
                            <button type="submit" className="salvar">Salvar Tarefa</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="add" onClick={() => OpenAside()}>
                <GrAdd />
            </div>
            {
                tarefas.map(data => {
                    return <Tarefas data={data}/>
                })
            }
        </HomeContainer>
    )
}

export default Home