import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

class Vacas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            raca: '',
            sexo: '',
            vacas: [],
        };
    }

    componentDidMount() {
        this.buscarVaca();
    }

    componentWillUnmount() {
        // Se necessário, adicione lógica de limpeza quando o componente for desmontado
    }

    handleChange = (e) => {
        // Atualize o estado dos inputs conforme o usuário digita
        const { name, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Adicione lógica para processar o envio do formulário, se necessário
    };

    buscarVaca = () => {
        fetch("http://localhost:8080/api/vacas")
            .then((resposta) => resposta.json())
            .then((dados) => {
                this.setState({ vacas: dados });
            });
    };

    deletarVaca = (id) => {
        fetch("http://localhost:8080/api/vacas/delete/"+id, { method: 'DELETE' })
            .then((resposta) => {
                if (resposta.ok) {
                    this.buscarVaca();
                }
            });
    };
    

    renderTabela() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Raça:</th>
                        <th>sexo:</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.vacas.map((vaca) => (
                        <tr key={vaca.id}>
                            <td>{vaca.nome}</td>
                            <td>{vaca.raca}</td>
                            <td>{vaca.sexo}</td>
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

    atualizaRaca = (e) => {
        this.setState(
            {
                raca: e.target.value
            }
        )
    }

    atualizaSexo = (e) => {
        this.setState(
            {
                sexo: e.target.value
            }
        )
    }

    submit(){
        const vaca = {
            nome: this.state.nome,
            raca: this.state.raca,
            sexo: this.state.sexo
        }

        this.cadastroVaca(vaca);

    }

    render() {
        return (
            <div>
                {this.renderTabela()}
            </div>
        );
    }
}

export default Vacas;
