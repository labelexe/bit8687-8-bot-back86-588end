import express, { Router } from 'express';
import {
    getTrader,
    addTrader,
    deleteTrader
} from '../controllers/TraderController';

const router: Router = express.Router();

router.get('/get/:id', getTrader);
router.post('/add', addTrader);
router.post('/remove', deleteTrader);

export default router;