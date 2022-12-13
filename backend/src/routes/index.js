const { Router } = require('express');
const router = Router();


const { getPlayers , getMatchs, getChampions , getEquipes , getClassement, getNationnalites, getTeamOfAPlayer } =  require('../controllers/index_controller');


router.get('/players/',getPlayers);
router.get('/matchs/',getMatchs);
router.get('/champions/',getChampions);
router.get('/equipes',getEquipes);
router.get('/classement',getClassement);
router.get('/nationalites',getNationnalites)
router.get('/equipes/:id_joueur',getTeamOfAPlayer)
// router.get('/types/:name',getTypes)

module.exports = router;