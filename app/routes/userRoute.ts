import express, { Router } from 'express';
import { 
    signin,
    register
} from '../controllers/UserController';

const router: Router = express.Router();

router.post('/signin', signin);
router.post('/register', register);

export default router;