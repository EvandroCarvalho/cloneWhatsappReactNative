import React, { Component } from 'react';

import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../actions/AppActions';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

class Contatos extends Component {

    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDeDados(this.props.contatos);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.contatos);
    }

    criaFonteDeDados( contatos ) {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
        this.fonteDeDados =  ds.cloneWithRows(contatos)
    }

    renderRow(contatos) {
        return(
            <TouchableHighlight
                underlayColor = '#fff'
                onPress = { () => Actions.conversa({title: contatos.nome, contatoNome: contatos.nome, contatoEmail: contatos.email }) }
            >
                <View style = {{flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC'}}>
                    <Text style={{fontSize: 20}}>{contatos.nome}</Text>
                    <Text style={{fontSize: 15}}>{contatos.email}</Text>
                </View>
            </TouchableHighlight>
        )
    }
    
    render () {
        return (
            <ListView
                enableEmptySections
                dataSource = {this.fonteDeDados}
                renderRow = {this.renderRow}
            />
        )
    }

}

mapStateToProps = state => {
    let contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid }
    })
    return { contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch } )(Contatos)