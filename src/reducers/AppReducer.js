import { 
    MODIFICA_EMAIL_ADICIONAR_CONTATO,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO,
    MODIFICA_MENSAGEM_PARA_CONTATO,
    ENVIA_MENSAGEM_PARA_CONTATO
    } from '../actions/types'

const INITIAL_STATE = {
    adicionarContatoEmail: '',
    adicionaContatoErro: '',
    adicionaContatoSucesso: false,
    mensagem: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFICA_EMAIL_ADICIONAR_CONTATO:
            return { ...state, adicionarContatoEmail: action.payload }
        case ADICIONA_CONTATO_ERRO:
            return { ...state, adicionaContatoErro: action.payload }
        case ADICIONA_CONTATO_SUCESSO:
            return { ...state, adicionaContatoSucesso: action.payload, adicionarContatoEmail: '' }
        case MODIFICA_MENSAGEM_PARA_CONTATO:
            return { ...state, mensagem: action.payload }
        case ENVIA_MENSAGEM_PARA_CONTATO:
            return { ...state, mensagem: '' }
        default:
            return state;
    }
}