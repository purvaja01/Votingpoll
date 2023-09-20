const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const sequelize = require('./Sequalize/sequalize');
const app = express()
app.use(cors())


require('dotenv').config();


        // Synchronize models with the database (force:false means no data loss)
        sequelize.sync().then(()=>{
            console.log("success");

        }).catch((error)=>{
            console.log(error);
        })



app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Error fetching users' });
        } else {
            res.json(results);
        }
    });
});     



app.listen(8001, ()=>{
    console.log("Listening...")
})