import { MODIFICA_EMAIL,
    MODIFICA_NOME,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_SUCESSO,
    LOGIN_ERRO,
    LOADING_EM_ANDAMENTO } from '../actions/types'

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    loginErro: '',
    loadingEmAndamento: false
};

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };
        case MODIFICA_NOME:
            return {...state, nome: action.payload };
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload };
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, loadingEmAndamento: false };
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loadingEmAndamento: false };
        case LOGIN_ERRO:
            return { ...state, loginErro: action.payload, loadingEmAndamento: false };
        case LOGIN_SUCESSO:
            return { ...state, nome: '', senha: '', loadingEmAndamento: false };
        case LOADING_EM_ANDAMENTO:
            return { ...state, loadingEmAndamento: true }
        default:
            return state
    }
};  