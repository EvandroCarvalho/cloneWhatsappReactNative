import { LISTA_CONVERSA_USUARIO } from '../actions/types'

const INITIA_STATE = {

}

export default (state = INITIA_STATE, action) => {
        switch(action.type) {
            case LISTA_CONVERSA_USUARIO:
                return action.payload
            default:
                return state;
        }
}