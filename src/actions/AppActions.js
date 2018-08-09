import { MODIFICA_EMAIL_ADICIONAR_CONTATO,
        ADICIONA_CONTATO_ERRO,
        ADICIONA_CONTATO_SUCESSO,
        LISTA_CONTATO_USUARIO,
        MODIFICA_MENSAGEM_PARA_CONTATO,
        ENVIA_MENSAGEM_PARA_CONTATO,
        LISTA_CONVERSA_USUARIO,
        LISTA_CONVERSAS_USUARIO
         } from './types'

import b64 from 'base-64';
import firebase from 'firebase';



export const modificaAdicionaContatoEmail = email => {
    return {
        type: MODIFICA_EMAIL_ADICIONAR_CONTATO,
        payload: email
    }
}

export const botaoAdicionarContatoEmail = email => {
    
    return dispatch => {
        let emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if(snapshot.val()) {
                    let [[,nome],] = Object.entries(snapshot.val())
                    let { currentUser } = firebase.auth()
                    let emailUsuarioBase64 = b64.encode(currentUser.email);
                    firebase.database().ref(`/usuario_contatos/${emailUsuarioBase64}`)
                        .push({email, nome})
                        .then(() => adicionaContatoSucesso(dispatch))
                        .catch((erro)=> adicionaContaoErro(erro.message, dispatch))


                } else { 
                    dispatch(
                        {
                            type: ADICIONA_CONTATO_ERRO,
                            payload: 'E-mail informado não corresponde a um usuário valido!'

                        }
                    )
                }
            })
    }


}

const adicionaContaoErro = (erro, dispatch) => {
    dispatch(
        {
            type: ADICIONA_CONTATO_ERRO,
            payload: erro
        }
    )
}

const adicionaContatoSucesso = dispatch => {
    dispatch(
        {
            type: ADICIONA_CONTATO_SUCESSO,
            payload: true
        }
    )
}

export const habilitaInclusaoContato = () => {
    return {
        type: ADICIONA_CONTATO_SUCESSO,
        payload: false
    }
}

export const contatosUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
       let emailUsuarioB64 = b64.encode(currentUser.email);
       
       firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
        .on('value', snapshot => {
            dispatch({
                type: LISTA_CONTATO_USUARIO,
                payload: snapshot.val()
            })
        })
    }
}

export const modificaMensagemParaContato = texto => {
    return {
        type: MODIFICA_MENSAGEM_PARA_CONTATO,
        payload: texto
    }
}

export const enviaMensagemParaContato = (mensagem, contatoNome, contatoEmail) => {
    const { currentUser } = firebase.auth();
    const usuarioEmail = currentUser.email;

    return dispatch => {
        const usuarioEmailB64 = b64.encode(usuarioEmail);
        const contatoEmailB64 = b64.encode(contatoEmail);

        dispatch({ type: ENVIA_MENSAGEM_PARA_CONTATO})

        firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
            .push({ mensagem, tipo: 'e' })
            .then(()=> {
                firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
                    .push( { mensagem, tipo: 'r' } )
                    //.then( () => dispatch({ type: ENVIA_MENSAGEM_PARA_CONTATO}) )
            })
            .then(()=> {
                firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`)
                    .set({ nome: contatoNome, email: contatoEmail })
            })

            .then( ()=> {
                firebase.database().ref(`/contatos/${usuarioEmailB64}`)
                    .once('value')
                    .then(snapshot => {
                        let [[,nome],] = Object.entries(snapshot.val());

                        firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`)
                            .set({ nome: nome, email: usuarioEmail })
                    })
            })
    }
}

export const conversaUsuarioFetch = contatoEmail => {
    const { currentUser } = firebase.auth();
    const emailUsuarioB64 = b64.encode(currentUser.email);
    const emailContatoB64 = b64.encode(contatoEmail);
    
    return dispatch => {
        firebase.database().ref(`/mensagens/${emailUsuarioB64}/${emailContatoB64}`)
            .on('value', snapshot => {
                dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() })
            })
    }
}

export const conversasUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        let usuarioEmailB64 = b64.encode(currentUser.email);

        firebase.database().ref(`usuario_conversas/${usuarioEmailB64}`)
            .on('value', snapshot => {
                dispatch({type: LISTA_CONVERSAS_USUARIO, payload: snapshot.val()})
            })
    }

}


