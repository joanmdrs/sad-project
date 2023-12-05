import { Button } from "antd";
import React from "react";

const Home = () => {

    const handlePrevisao = () => {
        window.location.href="previsoes";
    }


    return (
        <div> 
            <Button onClick={handlePrevisao} type="primary" size="medium">
                Realizar Previsão
            </Button>
        </div>
    )
}

export default Home;