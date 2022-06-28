const {Router} = require('express');
const router = Router();

import { findAll } from '../controllers/Articulos.controller'

router.route('/')
.get(findAll)

export default router