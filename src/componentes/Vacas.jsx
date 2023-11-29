import React from "react";
import { Table, Button } from "react-bootstrap";

class Vacas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vacas: []
        }
    }

    componentDidMount(){
        this.buscarVaca();
    }

    componentWillUnmount(){

    }

    buscarVaca = () => {
        fetch("http://localhost:3000/vacas")
        .then(resposta => resposta.json())
        .then(dados =>{
            this.setState({ vacas : dados })
        }) 
    }

    deletarVaca = (id) => {
        fetch("http://localhost:3000/vacas/"+id, {method: 'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                this.buscarVaca();
            }
        }) 
    }

    render() {
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
                    {
                        this.state.vacas.map((vaca) =>
                            <tr>
                                <td>{vaca.nome}</td>
                                <td>{vaca.identificacao}</td>
                                <td><Button variant="danger" onClick={() => this.deletarVaca(vaca.id)}>Excluir</Button></td>
                            </tr>
                        )

                    }
                </tbody>
            </Table>
        );
    }
}

export default Vacas;
