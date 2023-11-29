import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

class Vacas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            identificacao: '',
            vacas: [],
        };
    }

    componentDidMount() {
        this.buscarVaca();
    }

    componentWillUnmount() {
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    buscarVaca = () => {
        fetch("http://localhost:3000/vacas")
            .then((resposta) => resposta.json())
            .then((dados) => {
                this.setState({ vacas: dados });
            });
    };

    deletarVaca = (id) => {
        fetch(`http://localhost:3000/vacas/${id}`, { method: 'DELETE' })
            .then((resposta) => {
                if (resposta.ok) {
                    this.buscarVaca();
                }
            });
    };

    cadastroVaca = (vaca) => {
        fetch('http://localhost:3000/vacas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vaca),
        })
        .then((resposta) => {
            if (resposta.ok) {
                this.buscarVaca();
            } else {
                alert('Não foi possível adicionar o animal');
            }
        });
    }
    

    renderTabela() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Codigo</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.vacas.map((vaca) => (
                        <tr key={vaca.id}>
                            <td>{vaca.nome}</td>
                            <td>{vaca.identificacao}</td>
                            <td>
                                <Button variant="danger" onClick={() => this.deletarVaca(vaca.id)}>
                                    Excluir
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }

    atualizaNome = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    atualizaIdentificacao = (e) => {
        this.setState(
            {
                identificacao: e.target.value
            }
        )
    }

    submit(){
        const vaca = {
            nome: this.state.nome,
            identificacao: this.state.identificacao
        }
        this.cadastroVaca(vaca);

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="digite o nome do animal"
                            name="nome"
                            value={this.state.nome}
                            onChange={this.atualizaNome}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Identificação</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="digite a identificação do animal"
                            name="identificacao"
                            value={this.state.identificacao}
                            onChange={this.atualizaIdentificacao}
                        />
                        <Form.Text className="text-muted">
                            Digite o código da vaca
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.submit.bind(this)}>
                        Salvar
                    </Button>

                       
                </Form>
                {this.renderTabela()}
            </div>
        );
    }
}

export default Vacas;
