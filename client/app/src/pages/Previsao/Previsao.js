import React from "react";
import { Form, Input, Select, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const Previsao = () => {

    return (

        <div className="content-previsao">
            <h3> Realizar Previsão </h3>
            <p> Estimar a quantidade de alunos prevista para os próximos semestres  </p>
            <Form
                name="meuFormulario"
                    >
                <Form.Item
                    label="Selecione o curso"
                    name="curso"
                    rules={[{ required: true, message: 'Por favor, selecione o curso!' }]}
                >
                    <Select placeholder="Selecione o curso">
                        <Option value="adminstracao">Administração</Option>
                        <Option value="contabeis">Ciências Contábeis</Option>
                        <Option value="direito">Direito</Option>
                        <Option value="psicologia">Psicologia</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Informe o período"
                    name="periodo"
                    rules={[{ required: true, message: 'Por favor, informe o período!' }]}
                >
                    <Input placeholder="Informe o período que deseja prever" />
                </Form.Item>

                <Form.Item
                    label="Selecione uma planilha"
                    name="planilha"
                    rules={[{ required: true, message: 'Por favor, selecione uma planilha!' }]}
                >
                    <Upload beforeUpload={() => false}>
                    <Button icon={<UploadOutlined />}>Selecionar Planilha</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Selecione o método"
                    name="metodo"
                    rules={[{ required: true, message: 'Por favor, selecione o método!' }]}
                >
                    <Select placeholder="Selecione o método">
                        <Option value="metodo1">Média Móvel</Option>
                        <Option value="metodo2">Média Móvel Ponderada</Option>
                        <Option value="metodo3">Suavização exponencial</Option>

                
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Enviar
                    </Button>
                </Form.Item>
            </Form>
        </div>
        
    )
}

export default Previsao;