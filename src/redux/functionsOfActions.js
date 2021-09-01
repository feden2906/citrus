import {ADD_USER, LOAD_USERS} from "./acrions";


const loadUsers = (payload) => {
    return {type: LOAD_USERS, payload}
}
const addUsers = (payload) => {
    return {type: ADD_USER, payload}
}
export {loadUsers, addUsers}