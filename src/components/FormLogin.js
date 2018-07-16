import React, { Component } from 'react';

import { connect } from 'react-redux';

import { View,
    Text, 
    TextInput, 
    Button, 
    StyleSheet, 
    TouchableHighlight,
    ImageBackground,
    ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { modificaEmail,
    modificaSenha,
    autenticaUsuario } from '../actions/AutenticacaoActions'

class formLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading : false,
        }
    }

    _autenticaUsuario() {
        this.props.autenticaUsuario(this.props)
    }
    
    render () {
        return (
        <ImageBackground style={{flex: 1, width: null}} source ={require('../img/bg.png')} >
            <View style = {styles.viewMain}>
                <View style = {styles.viewTitle}>
                    <Text style = {styles.textTitle} >WhatsApp Clone</Text>
                </View>
                <View style = {styles.viewBody} >
                    <TextInput
                        value = {this.props.email}
                        onChangeText = { email => this.props.modificaEmail(email) }
                        style = {styles.textInput}
                        placeholder = 'Email'
                        placeholderTextColor = '#fff'
                    />
                    <TextInput
                        value = {this.props.senha}
                        onChangeText = { senha => this.props.modificaSenha(senha) }
                        style = {styles.textInput}
                        placeholder = 'Senha'
                        secureTextEntry = {true}
                        placeholderTextColor = '#fff'
                    />
                    <TouchableHighlight 
                    onPress=  {() => Actions.formCadastro()}
                    >
                        <Text style = {styles.textLink} >Ainda não tem cadastro? Cadastre-se</Text>
                    </TouchableHighlight>
                </View>
                <View>
                { this.state.loading && this.props.erroCadastro === '' && 
                            <ActivityIndicator animating={this.state.loading}
                                size='large'
                                color="#fff"/>
                        }
                </View>
                <View style = {styles.viewButton}>
                    <Button
                        color = '#115E54'
                        title = 'Acesssar'
                        onPress = {()=> this._autenticaUsuario()}
                    />
                </View>
            </View>
        </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticaUsuario })(formLogin)





const styles = StyleSheet.create({
    viewMain: {
        flex: 1,
        padding: 10,
    },
    viewTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewBody: {
        flex: 2
    },
    viewButton: {
        flex: 2
    },
    textTitle: {
        fontSize: 25,
        color: '#fff'
    },
    textInput: {
        fontSize: 20,
        height: 45,
    },
    textLink: {
        fontSize: 15,
        marginLeft: 10,
        color: '#fff',
    }

})