const { Router } = require('express');
const router = Router();


const { getPlayers , getMatchs, getChampions , getEquipes , getClassement, getNationnalites, getTeamOfAPlayer , getRoles, getBestMatchsPlayer, getChampionsPlayer, getPlayer, getMatchsPlayer, getMatesPlayer, getEquipe, getKdaEquipe, getCoach, getStatsEquipe, getPlayersTeam, getClassementWeek, getMatch } =  require('../controllers/index_controller');


router.get('/matchs/',getMatchs);
router.get('/matchs/:id_match',getMatch);

router.get('/champions/',getChampions);


router.get('/equipes',getEquipes);
router.get('/equipes/:id_equipe',getEquipe);
router.get('/equipes/:id_equipe/kda',getKdaEquipe);
router.get('/equipes/:id_equipe/coach',getCoach);
router.get('/equipes/:id_equipe/stats',getStatsEquipe);
router.get('/equipes/:id_equipe/joueurs',getPlayersTeam)


router.get('/classement',getClassement);
router.get('/classement/:week',getClassementWeek)


router.get('/nationalites',getNationnalites);
router.get('/roles',getRoles);


router.get('/players/',getPlayers);
router.get('/players/:id_joueur',getPlayer);
router.get('/players/:id_joueur/equipe',getTeamOfAPlayer)
router.get('/players/:id_joueur/mates',getMatesPlayer);
router.get('/players/:id_joueur/matchs/',getMatchsPlayer);
router.get('/players/:id_joueur/champions',getChampionsPlayer);
router.get('/players/:id_joueur/bmatchs',getBestMatchsPlayer);
// router.get('/types/:name',getTypes)

module.exports = router;