import express from 'express';
import type { Request, Response } from 'express';

import { createUser, deleteUser, updateUser, getUser, getUserList } from './user.controller.js'

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    let taskresponse = getUserList(req.body);
    res.send(taskresponse)
})

router.route('./user')
    .get(
        (req: Request, res: Response) => {
            let taskresponse = getUser(req.body);
            res.send(taskresponse)
        }
    )
    .post(
        (req: Request, res: Response) => {
            let taskresponse: object = createUser(req.body);
            res.send(taskresponse)
        }
    )
    .put(
        (req: Request, res: Response) => {
            let taskresponse = updateUser(req.body);
            res.send(taskresponse)
        }
    )
    .delete(
        (req: Request, res: Response) => {
            let taskresponse = deleteUser(req.body);
            res.send(taskresponse)
        }
    )

export default router;