const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: ''
};

export default ( state = INITIAL_STATE, action ) => {
    if (action.type === 'modifica_email')
        return {...state, email: action.payload}
    
    if (action.type === 'modifica_nome')
        return {...state, nome: action.payload }
    
    if (action.type === 'modifica_senha')
        return { ...state, senha: action.payload }
    
    if (action.type === 'cadastro_usuario_erro' )
        return { 
            ...state,
            erroCadastro: action.payload === 'auth/weak-password' ? 'A senha deve conter no mínimo 6 caracteres' : 'Email já cadastrado' }
     
    if (action.type === 'cadastro_usuario_sucesso')
        return {
            ...state,
            nome: '',
            senha: ''
        }
    
    if (action.type === 'login_sucesso')
        console.log('sucesso')
        return {
            ...state,
            nome: '',
            senha: ''
        }
    
    if (action.type === 'login_erro')
        return {
            ...state,
            nome: '',
            senha: ''
        }
};
