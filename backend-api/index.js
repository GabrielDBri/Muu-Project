const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');  // Adicione esta linha
const server = express();
const vacas = require('./src/data/vacas.json');

server.use(cors());
server.use(express.json());  // Adicione esta linha para parsear o corpo JSON
server.use(methodOverride('_method'));  // Adicione esta linha

server.route('/vacas')
    .get((req, res) => {
        return res.json(vacas);
    })
    .delete((req, res) => {
        // Lógica para deletar vaca aqui
        const vacaId = req.query.id;  // Obtenha o ID da solicitação (usando query para DELETE)
        // Lógica para deletar vaca com o ID fornecido
        res.json({ message: `Vaca com ID ${vacaId} deletada com sucesso.` });
    });

server.listen(3000, () => {
    console.log('Servidor está funcionando');
});
