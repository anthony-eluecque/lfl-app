const { Pool } = require('pg');

const pool = new Pool({
    host:'127.0.0.1',
    user:'antorak',
    password:'antorak123',
    database:'lfl',
    port:'5433'
})

const getRoles = async(req,res) => {
    const response = await pool.query(`Select * from roles`);
    res.status(200).json(response.rows);
}

const getTeamOfAPlayer = async(req,res) => {
    const response = await pool.query(`Select * from jouer_dans where id_joueur = ${req.params.id_joueur}`)
    res.status(200).json(response.rows);
}

const getMatesPlayer = async(req,res) => {
    const response = await pool.query(`Select * from jouer_dans where id_equipe = (Select id_equipe from jouer_dans where id_joueur = ${req.params.id_joueur})`)
    res.status(200).json(response.rows);
}

const getClassementWeek = async(req,res) => {
    const response = await pool.query(`Select * from classement_week_lfl where week = ${req.params.week} order by nb_win desc`)
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

const getEquipe = async(req,res) => {
    const response = await pool.query(`Select * from Equipes where id_equipe = ${req.params.id_equipe}`)
    res.status(200).json(response.rows);
}

const getKdaEquipe = async(req,res) => {

    const response = await pool.query(`Select * from calcul_kda_equipe(${req.params.id_equipe})`)
    res.status(200).json(response.rows);
}

const getStatsEquipe = async(req,res) =>{
    const response = await pool.query(`Select * from statistique_lfl where id_equipe = (${req.params.id_equipe})`);
    res.status(200).json(response.rows);
}

const getCoach = async(req,res) => {

    const response = await pool.query(`Select * from Coachs where id_coach = (Select id_coach from equipes where id_equipe = ${req.params.id_equipe}) `)
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

const getPlayersTeam = async(req,res) => {
    const response = await pool.query(`Select * from jouer_dans where id_equipe = (${req.params.id_equipe})`)
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


const getMatch = async(req,res) => {
    const response = await pool.query(`Select * from Historique_matchs where id_match = ${req.params.id_match}`)
    res.status(200).json(response.rows);

}


module.exports = {
    getPlayers,
    getMatchs,
    getMatch,
    getChampions,
    getEquipes,
    getClassement,
    getNationnalites,
    getTeamOfAPlayer,
    getRoles,   
    getPlayer,
    getMatchsPlayer,
    getBestMatchsPlayer,
    getChampionsPlayer,
    getMatesPlayer,
    getEquipe,
    getKdaEquipe,
    getCoach,
    getStatsEquipe,
    getPlayersTeam,
    getClassementWeek
}