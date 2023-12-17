import express from 'express';
import { createPosting, deletePosting, updatePosting, getPosting, getPostings } from '../controllers/posting.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.post('/create', verifyToken, createPosting );
router.delete('/delete/:id', verifyToken, deletePosting);
router.post('/update/:id', verifyToken, updatePosting);
router.get('/get/:id', getPosting);
router.get('/get', getPostings);

export default router;