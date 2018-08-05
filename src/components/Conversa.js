import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, Image, ListView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { 
    modificaMensagemParaContato,
    enviaMensagemParaContato,
    conversaUsuarioFetch
    } from '../actions/AppActions';

class Conversa extends Component {

    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail);
        this.criaFonteDeDados(this.props.conversa);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversa);
    }

    criaFonteDeDados( conversa ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows( conversa );
    }

    _enviaMensagemParaContato() {
        let { mensagem, contatoNome, contatoEmail } = this.props;
        this.props.enviaMensagemParaContato(mensagem,contatoNome,contatoEmail);
    }

    renderRow(texto) {
        if (texto.tipo === 'e'){
            return (
                <View style = { styles.styleViewEnvioMsg }>
                    <Text style = { styles.styleTextEnvioMsg }>
                        {texto.mensagem}
                    </Text>
                </View>
            )
        } else {
            return (
                <View style = { styles.styleViewRecebimentoMsg } >
                    <Text style = { styles.styleTextRecebimentoMsg }>
                        {texto.mensagem}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View style = {{flex: 1}}>
                <View style = {{flex: 1, backgroundColor: '#EEE4DC', paddingBottom: 20 }}>
                    <ListView
                        ref={ ( ref ) => this.scrollView = ref }
                        onContentSizeChange={ () => {        
                            this.scrollView.scrollToEnd( { animated: false } )
                        } }
                        enableEmptySections
                        dataSource = {this.dataSource}
                        renderRow = {this.renderRow}
                    />
                </View>
                <View style ={{height: 60, flexDirection: 'row',  backgroundColor: '#FFF'}}>
                        <TextInput
                            value = {this.props.mensagem}
                            onChangeText = { (texto) => this.props.modificaMensagemParaContato(texto) }
                            style = {{ flex: 4, fontSize: 18 }}
                        /> 
                        <TouchableHighlight onPress = { () => this._enviaMensagemParaContato()  /*ou  this._enviaMensagemParaContato.bind(this)*/} underlayColor = '#FFF'>
                            <Image source = {require('../img/enviar_mensagem.png')} />
                        </TouchableHighlight>
                    </View>
            </View>
        )
    }
}

mapStateToProps = state => {
    const conversa  = _.map(state.ListaConversaReducer, (val, uid) => { //Object.entries(state.ListaConversaReducer)
        return {...val, uid}
    })
    return (
        {
            mensagem : state.AppReducer.mensagem,
            conversa
        }
    )
}

export default connect(mapStateToProps, 
    { 
        modificaMensagemParaContato, 
        enviaMensagemParaContato,
        conversaUsuarioFetch
    })(Conversa)

const styles = StyleSheet.create({
    styleViewEnvioMsg: {
        alignItems: 'flex-end', 
        padding: 5, 
        marginLeft: 40
    },

    styleViewRecebimentoMsg: {
        alignItems: 'flex-start', 
        padding: 5, 
        marginLeft: 40
    },

    styleTextEnvioMsg: {
        fontSize: 15, 
        color: '#000', 
        elevation: 1, 
        backgroundColor: '#FFFACD', 
        padding: 5, 
        borderRadius: 6
    },

    styleTextRecebimentoMsg: {
        fontSize: 15, 
        color: '#000', 
        backgroundColor: '#FFF',  
        elevation: 1, 
        padding: 5, 
        borderRadius: 6
    }

})