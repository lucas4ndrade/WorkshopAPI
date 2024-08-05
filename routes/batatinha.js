const { quandoNasceHandler, esparramaHandler, createBatatinha } = require('../controllers/batatinha');
const { batatinhaMiddleware } = require('../middlewares/batatinha');

const router = require('express').Router();

router.use(batatinhaMiddleware);

router.get("/quandonasce", quandoNasceHandler);

router.get("/esparrama", esparramaHandler);

router.post("/", createBatatinha);

module.exports = router;