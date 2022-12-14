const { Pool } = require('pg');

const pool = new Pool({
    host:'127.0.0.1',
    user:'antorak',
    password:'antorak123',
    database:'lfl_sae',
    port:'5433'
})

const getRoles = async(req,res) => {
    const response = await pool.query(`Select * from roles`);
    res.status(200).json(response.rows);
}

const getTeamOfAPlayer = async(req,res) => {
    const response = await pool.query(`Select * from jouer_dans where id_equipe = (Select id_equipe from jouer_dans where id_joueur = ${req.params.id_joueur})`)
    res.status(200).json(response.rows);
}

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
    const response = await pool.query(`Select * from classement_lfl order by nb_win desc`);
    res.status(200).json(response.rows);
}

const getNationnalites = async(req,res) => {
    const response = await pool.query(`Select * from nationalites`);
    res.status(200).json(response.rows);
}


const getPlayer = async(req,res) => {
    const response = await pool.query(`Select * from Joueurs where id_joueur = ${req.params.id_joueur}`)
    res.status(200).json(response.rows);
}

const getMatchsPlayer = async(req,res) => {
    const response = await pool.query(`Select * from  get_matchs_joueur(${req.params.id_joueur})`);
    res.status(200).json(response.rows);
}

const getChampionsPlayer = async(req,res) => {
    const response = await pool.query(`Select * from  get_champions_joueur(${req.params.id_joueur})`);
    res.status(200).json(response.rows);
}

const getBestMatchsPlayer = async(req,res) => {
    const response = await pool.query(`Select * from  meilleurs_matchs_joueur(${req.params.id_joueur})`);
    res.status(200).json(response.rows);
}



module.exports = {
    getPlayers,
    getMatchs,
    getChampions,
    getEquipes,
    getClassement,
    getNationnalites,
    getTeamOfAPlayer,
    getRoles,
    getPlayer,
    getMatchsPlayer,
    getBestMatchsPlayer,
    getChampionsPlayer
}