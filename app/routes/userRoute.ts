import express, { Router } from 'express';
import { 
    signin,
    register,
    test
} from '../controllers/UserController';

const router: Router = express.Router();

router.post('/test', test);
router.post('/signin', signin);
router.post('/register', register);

export default router;
