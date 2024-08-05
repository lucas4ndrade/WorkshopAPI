const express = require('express');
const batatinhaRouter = require('./routes/batatinha');

const mongo = require('./infra/mongo');
const errorHandler = require('./middlewares/errorHandler');

mongo.init();

const app = express();

app.use(express.json());

app.use("/batatinhas", batatinhaRouter);

app.use(errorHandler);

app.listen(3000);
