import express from 'express';
import { getFeedPosts, getUsersPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/feed', verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUsersPosts);

router.patch("/:id/like", verifyToken, likePost);

export default router;