import express from 'express';
const router = express.Router();
import { getPlants, getPlantById } from '../controllers/plantController.js';

router.route('/').get(getPlants);

router.route('/:id').get(getPlantById);

export default router;
