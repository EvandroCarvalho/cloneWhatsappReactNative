import React, { Component } from 'react';

import { View,
    TextInput,
    StyleSheet,
    Button,
    ImageBackground,
    Text,
    ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaNome,
        modificaEmail,
        modificaSenha,
        cadastroUsuario } from '../actions/AutenticacaoActions'
        
class formCadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    _cadastroUsuario() {
        this.props.cadastroUsuario(this.props)
    }
    

    render (){
        return (
            <ImageBackground style={{flex: 1, width: null}} source={require('../img/bg.png')} >
                <View style = {styles.viewMain}>
                    <View style = {styles.viewInput} >
                        <TextInput
                            value = {this.props.nome}
                            onChangeText = { nome => this.props.modificaNome(nome) }
                            style = {styles.textInput}
                            placeholder = 'Nome'
                            placeholderTextColor = '#fff'
                        />
                        <TextInput
                            value = {this.props.email}
                            onChangeText = { email => this.props.modificaEmail(email) }
                            style = {styles.textInput}
                            placeholder = 'Email'
                            placeholderTextColor = '#fff'
                        />
                        <TextInput
                            value = {this.props.senha }
                            onChangeText = { senha => this.props.modificaSenha(senha) }
                            style = {styles.textInput}
                            placeholder = 'Senha'
                            placeholderTextColor = '#fff'
                            secureTextEntry
                        />
                        <Text style={styles.textErro} >{this.props.erroCadastro}</Text>
                    </View>
                    <View style = {styles.viewButton}>
                        <Button 
                            color = '#115E54'
                            title = 'Cadastrar'
                            onPress = {()=> this._cadastroUsuario()
                            }
                        />
                        
                    </View>
                </View>
        </ImageBackground>
    );
}
}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro
    }
);

export default connect(
    mapStateToProps, 
    {
        modificaNome,
        modificaEmail,
        modificaSenha,
        cadastroUsuario 
    })(formCadastro)

const styles = StyleSheet.create({
    textErro:{
        color: '#ff0000',
        fontSize: 18

    },
    viewMain: {
        flex: 1,
        padding: 10,
    },
    viewInput: {
        flex: 4,
        justifyContent: 'center'
    },
    viewButton: {
        flex: 1
    },
    textInput: {
        fontSize: 20,
        height: 45,
    },

});

