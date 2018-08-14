import NotifService from '../NotifService';

import { 
    MODIFICA_EMAIL_ADICIONAR_CONTATO,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    MODIFICA_MENSAGEM_PARA_CONTATO,
    ENVIA_MENSAGEM_PARA_CONTATO,
    MODIFICA_APP_ACTIVE,
    NOTIFICA_USUARIO
    } from '../actions/types'

const INITIAL_STATE = {
    adicionarContatoEmail: '',
    adicionaContatoErro: '',
    adicionaContatoSucesso: false,
    mensagem: '',
    appAtivo: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFICA_EMAIL_ADICIONAR_CONTATO:
            return { ...state, adicionarContatoEmail: action.payload }
        case ADICIONA_CONTATO_ERRO:
            return { ...state, adicionaContatoErro: action.payload }
        case ADICIONA_CONTATO_SUCESSO:
            return { ...state, adicionaContatoSucesso: action.payload, adicionaContatoErro: '',  adicionarContatoEmail: '' }
        case MODIFICA_MENSAGEM_PARA_CONTATO:
            return { ...state, mensagem: action.payload, send: false }
        case ENVIA_MENSAGEM_PARA_CONTATO:
            return { ...state, mensagem: '' }
        case MODIFICA_APP_ACTIVE:
            return { ...state, appAtivo: action.payload }
        case NOTIFICA_USUARIO:
            if(!state.appAtivo) {
                new NotifService().localNotif()
                return state;
            }
            return state
        default:
            return state;
    }
}