import { Actions  } from 'react-native-router-flux';
import b64 from 'base-64';
import { MODIFICA_EMAIL,
        MODIFICA_NOME,
        MODIFICA_SENHA,
        CADASTRO_USUARIO_SUCESSO,
        CADASTRO_USUARIO_ERRO,
        LOGIN_SUCESSO,
        LOGIN_ERRO,
        LOADING_EM_ANDAMENTO } from './types'

import firebase from 'firebase';

export const modificaEmail = (email) => {
    return {
        type: MODIFICA_EMAIL,
        payload: email
    }
}

export const modificaNome = (nome) => {
    return {
        type: MODIFICA_NOME,
        payload: nome
    }
}

export const modificaSenha = (senha) => {
    return{
        type: MODIFICA_SENHA,
        payload: senha
    }
}

export const cadastroUsuario = (dadosUsuario) => {
    return dispatch => {
            dispatch({type:LOADING_EM_ANDAMENTO})
            firebase.auth().createUserWithEmailAndPassword(dadosUsuario.email, dadosUsuario.senha)
            .then(user => {
                let emailB64 = b64.encode(dadosUsuario.email);
                firebase.database().ref(`/contatos/${emailB64}`)
                .push(dadosUsuario.nome)
                .then(value => cadastroUsuarioSucesso(dispatch) )
                }
            )
            .catch(error=> cadastroUsuarioErro(error, dispatch))
    }
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_SUCESSO })
    Actions.boasVindas()
}

const cadastroUsuarioErro = (error, dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_ERRO, payload: error.message })
}

export const autenticaUsuario = (dadosLogin) => {
     return dispatch => {
        dispatch({type:LOADING_EM_ANDAMENTO})
        firebase.auth().signInWithEmailAndPassword(dadosLogin.email,dadosLogin.senha)
        .then(value => loginSucesso(dispatch ))
        .catch(error => loginErro(error, dispatch))
    }
}

const loginSucesso = (dispatch) => {
    dispatch({type: LOGIN_SUCESSO})
    Actions.principal();
}

const loginErro = (erro, dispatch) => {
    dispatch({type: LOGIN_ERRO, payload: erro.message})
}
