import express, { Router } from 'express';
import { index } from './src/controllers/registerViewController';
import { saveData } from './src/controllers/registerController';


// Initialize the router
const router = Router();
// Handle /movies.json route with index action from movies controller
router.route('/register.json').get(index);
router.route('/register').post(saveData);

export default router;
