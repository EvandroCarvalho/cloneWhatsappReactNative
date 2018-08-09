import { LISTA_CONVERSAS_USUARIO } from '../actions/types'

const INITAL_STATE = {}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case LISTA_CONVERSAS_USUARIO:
            return action.payload;
        default:
            return state;
    }
}