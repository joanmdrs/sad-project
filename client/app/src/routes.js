import React from "react";
import { BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import Previsao from "./pages/Previsao/Previsao";
import Home from "./pages/Home/Home";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route Component={Previsao} path='/previsoes' exact/>
                <Route Component={Home} path='/' exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes; 