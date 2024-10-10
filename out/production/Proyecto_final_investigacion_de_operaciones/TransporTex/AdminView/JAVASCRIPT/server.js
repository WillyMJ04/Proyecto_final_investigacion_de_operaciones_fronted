const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

app.post('/update', (req, res) => {
    const { id, nombre, apellido, dpi, fecha, licencia } = req.body;
    const query = 'UPDATE usuarios SET nombre = ?, apellido = ?, dpi = ?, fecha = ?, licencia = ? WHERE id = ?';
    db.query(query, [nombre, apellido, dpi, fecha, licencia, id], (err, result) => {
        if (err) throw err;
        res.json({ success: true });
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});