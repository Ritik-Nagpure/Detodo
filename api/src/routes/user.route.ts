import express from 'express';
import type { Response } from 'express';

const router = express.Router();

router.get('/', (res: Response) => {
    res.send('user')
})

export default router;