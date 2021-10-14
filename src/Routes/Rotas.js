import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import TarefasEdit from '../components/Tarefas/TarefasEdit/TarefasEdit'

const Rotas = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path = "/edit/:_id" exact component={TarefasEdit}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas