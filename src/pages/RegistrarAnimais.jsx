import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import styles from '../styles/RegistrarAnimais.module.css'

class RegistrarAnimais extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            nome:'',
            data:'',
            raca:'',
            sexo:'',
            vacas: []
        }
    }

    cadastraVaca = (vaca) => {
        fetch("http://localhost:8080/api/vacas",
        {method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(vaca)
        })
        .then(resposta => {
            if (resposta.ok) {
                this.buscarVaca();
            }else{
                alert('nao deu');
            }
        })
    }

    atualizanome = (e) =>{
        this.setState(
            {
            nome: e.target.value
            }
        )
    }

    atualizadata = (e) =>{
        this.setState(
            {
            data: e.target.value
            }
        )
    }

    atualizaraca = (e) =>{
        this.setState(
            {
            raca: e.target.value
            }
        )
    }

    atualizasexo = (e) =>{
        this.setState(
            {
            sexo: e.target.value
            }
        )
    }

    submit = () => {
        const vaca = {
            id:0,
            nome: this.state.nome,
            data: this.state.data,
            raca: this.state.raca,
            sexo: this.state.sexo
        }
        this.cadastraVaca(vaca);
    }


    

    render(){
        return (
            <div className={styles.divform}>
                <h1>Registre O Animal</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome" value={this.state.nome} onChange={this.atualizanome}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicData">
                        <Form.Label>Nascimento:</Form.Label>
                        <Form.Control type="date" value={this.state.data} onChange={this.atualizadata}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRaça">
                        <Form.Label>Raça:</Form.Label>
                        <Form.Control type="text" placeholder="Raça" value={this.state.raca} onChange={this.atualizaraca}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSexo">
                        <Form.Label>Sexo:</Form.Label>
                        <Form.Control type="text" placeholder="Sexo" value={this.state.sexo} onChange={this.atualizasexo}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.submit}>
                        Submit
                    </Button>
                </Form>
                
            
            </div>
        );
    }
    
}

export default RegistrarAnimais;