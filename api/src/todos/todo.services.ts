import { payloadTodo } from '../utils/interfaces.js'
import { validTodoStrings } from './todo.validator.js'

import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const createTodoService = (todoModel: payloadTodo) => {
    console.log('Inside create todo services', todoModel);

    let crt = async () => {
        await prisma.todo.create({
            data: {
                title: 'Finish TypeScript guide',
                status: 'in-progress'
            }
        });
    };
    crt();
    console.log(todoModel)
}

export const deleteTodoService = () => {

}

export const updateTodoService = () => {

}

export const getTodoService = () => {

}

export const getTodoServiceList = () => {

}

