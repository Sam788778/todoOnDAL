import axios from "axios";
import {
    addTodoActionCreator,
    completedTodoActionCreator,
    editTodoActionCreator,
    getTodoActionCreator,
    removeTodoActionCreator
} from "../Store/Store";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const API = {
    getTodos(dispatch) {
        instance.get("/todos?_limit=10")
            .then(res => dispatch(getTodoActionCreator(res.data)))
            .catch(error => console.error("Error fetching todos:", error));
    },
    addTodo(todo, dispatch) {
        instance.post("/todos", todo)
            .then(res => dispatch(addTodoActionCreator(res.data)))
            .catch(error => console.error("Error adding todo:", error));
    },
    removeTodo(id, dispatch) {
        instance.delete(`/todos/${id}`)
            .then(() => dispatch(removeTodoActionCreator(id)))
            .catch(error => console.error("Error removing todo:", error));
    },
    editTodo(todo, dispatch) {
        instance.put(`/todos/${todo.id}`, todo)
            .then(res => dispatch(editTodoActionCreator(res.data)))
            .catch(error => console.error("Error editing todo:", error));
    },
    completedTodo(id, dispatch) {
        instance.patch(`/todos/${id}`, { completed: true })
            .then(() => dispatch(completedTodoActionCreator(id)))
            .catch(error => console.error("Error toggling todo completion:", error));
    }
};