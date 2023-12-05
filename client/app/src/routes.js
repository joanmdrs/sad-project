import React from "react";
import { BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import Previsao from "./pages/Previsao/Previsao";
import Home from "./pages/Home/Home";
import Evasao from "./pages/Evasao/Evasao";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route Component={Previsao} path='/previsoes' exact/>
                <Route Component={Evasao} path='/evasao' exact/>
                <Route Component={Home} path='/' exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes; 