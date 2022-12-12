const { Pool } = require('pg');

const pool = new Pool({
    host:'127.0.0.1',
    user:'antorak',
    password:'antorak123',
    database:'lfl_sae',
    port:'5433'
})

const getPlayers = async(req,res) => {
    const response = await pool.query(`Select * from Joueurs`);
    res.status(200).json(response.rows);
}

const getMatchs = async(req,res) => {
    const response = await pool.query(`Select * from matchs`);
    res.status(200).json(response.rows);
}

const getChampions = async(req,res) => {
    const response = await pool.query(`Select * from Champions`);
    res.status(200).json(response.rows);
}

const getEquipes = async(req,res) => {
    const response = await pool.query(`Select * from Equipes`);
    res.status(200).json(response.rows);
}

const getClassement = async(req,res) => {
    const response = await pool.query(`Select * from classement_lfl`);
    res.status(200).json(response.rows);
}

const getNationnalites = async(req,res) => {
    const response = await pool.query(`Select * from nationalites`);
    res.status(200).json(response.rows);
}




module.exports = {
    getPlayers,
    getMatchs,
    getChampions,
    getEquipes,
    getClassement,
    getNationnalites
}