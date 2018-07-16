import { Actions  } from 'react-native-router-flux';
import b64 from 'base-64';

import firebase from 'firebase';

export const modificaEmail = (email) => {
    return {
        type: 'modifica_email',
        payload: email
    }
}

export const modificaNome = (nome) => {
    return {
        type: 'modifica_nome',
        payload: nome
    }
}

export const modificaSenha = (senha) => {
    return{
        type: 'modifica_senha',
        payload: senha
    }
}

export const cadastroUsuario = (dadosUsuario) => {
    return dispatch => {
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
    dispatch({ type: 'cadastro_usuario_sucesso' })
    Actions.boasVindas()
}

const cadastroUsuarioErro = (error, dispatch) => {
    dispatch({ type: 'cadastro_usuario_erro', payload: error.code })
}

export const autenticaUsuario = (dadosLogin) => {
     return dispatch => {
        firebase.auth().signInWithEmailAndPassword(dadosLogin.email,dadosLogin.senha)
        .then(value => loginSucesso(dispatch ))
        .catch(error => loginErro(error, dispatch))
    }
}

const loginSucesso = (dispatch) => {
    dispatch({type: 'login_sucesso'})
}

const loginErro = (erro, dispatch) => {
    dispatch({type: 'login_erro', payload: erro})
}
