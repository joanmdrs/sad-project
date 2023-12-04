import { Button } from "antd";
import React from "react";

const Home = () => {

    const handlePrevisao = () => {
        window.location.href="previsoes";
    }


    return (
        <div> 
            <Button onClick={handlePrevisao}>
                Realizar Previsão
            </Button>
        </div>
    )
}

export default Home;