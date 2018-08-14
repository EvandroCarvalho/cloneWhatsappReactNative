import NotifService from '../NotifService';
import { NOTIFICA_USUARIO } from '../actions/types'

const INITIAL_STATE = {
    send: false
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case NOTIFICA_USUARIO:
            if(this.send) {
                new NotifService().localNotif()
                return state;
            }
            return {...state, send: true}
        
        default:
            return state;
    }
} 