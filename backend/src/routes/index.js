const { Router } = require('express');
const router = Router();


const { getPlayers , getMatchs, getChampions , getEquipes , getClassement, getNationnalites, getTeamOfAPlayer , getRoles, getBestMatchsPlayer, getChampionsPlayer, getPlayer, getMatchsPlayer } =  require('../controllers/index_controller');


router.get('/players/',getPlayers);
router.get('/matchs/',getMatchs);
router.get('/champions/',getChampions);
router.get('/equipes',getEquipes);
router.get('/equipes/:id_joueur',getTeamOfAPlayer);
router.get('/classement',getClassement);
router.get('/nationalites',getNationnalites);
router.get('/roles',getRoles);


router.get('/players/:id_joueur',getPlayer);
router.get('/players/:id_joueur/matchs/',getMatchsPlayer);
router.get('/players/:id_joueur/champions',getChampionsPlayer);
router.get('/players/:id_joueur/bmatchs',getBestMatchsPlayer);
// router.get('/types/:name',getTypes)

module.exports = router;