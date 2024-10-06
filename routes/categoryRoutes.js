import express from 'express';
import { createCategory, initializeCategories } from '../controllers/categoryController.js';

const router = express.Router();

router.post('/', createCategory);

router.post('/initialize', initializeCategories);

export default router;
