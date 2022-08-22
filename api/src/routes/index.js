const { Router } = require('express');
const dogRouter = require('./dogRouter');
const temperamentRouter = require('./temperamentRouter');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use("/dogs", dogRouter);
mainRouter.use("/temperaments", temperamentRouter);


module.exports = mainRouter;
