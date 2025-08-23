import express from 'express';
import type { Request, Response, NextFunction, RequestHandler } from 'express';
import type { payloadTodo, controllerReturn } from '../utils/interfaces.js';

import {
    createTodo, deleteTodo, updateTodo, getTodo, getTodoList
} from './todo.controller.js'

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    let taskresponse: payloadTodo[] = getTodoList(req.body);
    res.send(taskresponse)
});

router
    .route('/todo')
    .get(
        (req: Request, res: Response) => {
            let taskresponse: payloadTodo = getTodo(req.body);
            res.send(taskresponse)
        }
    )
    .post(
        (req: Request, res: Response) => {
            console.log('Hi', req.body)
            let taskresponse: controllerReturn = createTodo(req.body);
            res.send(taskresponse)
            
        }
    )
    .put(
        (req: Request, res: Response) => {
            let taskresponse: controllerReturn = updateTodo(req.body);
            res.send(taskresponse)
        }
    )
    .delete(
        (req: Request, res: Response) => {
            let taskresponse: controllerReturn = deleteTodo(req.body);
            res.send(taskresponse)
        }
    )

export default router;