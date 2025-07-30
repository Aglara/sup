// server.js
const express = require('express');
const path = require('path');
const app = express();

// 1) Parseia JSON do body
app.use(express.json());

// 2) Servir arquivos estáticos em /public
app.use(express.static(path.join(__dirname, 'public')));

// 3) Rota de recebimento do formulário
app.post('/agendar', (req, res) => {
    const dados = req.body;
    console.log('📅 Novo agendamento:', dados);
    // TODO: aqui você dispara notificação (e-mail, SMS...) para o professor
    res.json({ sucesso: true, mensagem: 'Agendamento recebido!' });
});

// 4) Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server rodando em http://localhost:${PORT}`);
});