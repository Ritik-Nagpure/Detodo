import { controllerReturn, payloadTodo } from '../utils/interfaces.js'
import {
    createTodoService, deleteTodoService, updateTodoService, getTodoService, getTodoServiceList
} from './todo.services.js'
import { todoIdGenrator } from './todo.utils.js'

type reqBodyObject = {
    taskName: string,
    taskStatus: string
}

export const createTodo = (jbody: reqBodyObject): controllerReturn => {
    console.log('Inside create todo controller', jbody);
    let todoModel = {
        // id: todoIdGenrator(),
        title: jbody.taskName,
        status: jbody.taskStatus,
        // completed: false,
        // createdAt: new Date,
        // updatedAt: new Date

    }
    let taskresponse: any = createTodoService(todoModel);
    return {}
}

export const deleteTodo = (jbody: reqBodyObject): controllerReturn => {
    return {}
}

export const updateTodo = (jbody: reqBodyObject): controllerReturn => {
    return {}
}

export const getTodo = (jbody: reqBodyObject): payloadTodo => {
    return {}
}

export const getTodoList = (jbody: reqBodyObject): payloadTodo[] => {
    return []
}

