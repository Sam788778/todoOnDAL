const GET = "SET_TODOS";
const REMOVE = "REMOVE_TODO";
const EDIT = "EDIT_TODO";
const ADD = "ADD_TODO";
const COMPLETED = "COMPLETED_TODO";

export const initState = {
    todos: [],
    text: "",
    completed: false,
}

export const reduser = (state, action) => {
    switch (action.type) {
        case GET:
            return {
                ...state,
                todos: action.payload
            }
        case ADD:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case EDIT:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
                )
            }
        case COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            }        
        default:
            return state;
    }
}

export function getTodoActionCreator(data) {
    return { type: GET, payload: data }
}
export function removeTodoActionCreator(id) {
    return { type: REMOVE, payload: id }
}
export function editTodoActionCreator(todo) {
    return { type: EDIT, payload: todo }
}
export function addTodoActionCreator(todo) {
    return { type: ADD, payload: todo }
}
export function completedTodoActionCreator(id) {
    return { type: COMPLETED, payload: id }
}