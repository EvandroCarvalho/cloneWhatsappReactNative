import React, { Component } from 'react';

import { View, TextInput, Button, ImageBackground, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { 
        modificaAdicionaContatoEmail,
        botaoAdicionarContatoEmail
        } from '../actions/AppActions'

 class AdicionarContato extends Component {
     constructor(props) {
         super(props)
     }

     componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid)
      }
      
      _onBackAndroid = () => {
        if (this.lastBackPressed) {
            Actions.pop();
        }
      };

     adicionaContato() {
        if(!this.props.adicionaContatoSucesso) {
            return (
            <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <TextInput
                        style= {{fontSize: 20, height: 45}}
                        placeholder = 'E-mail'
                        value = {this.props.adicionarContatoEmail}
                        onChangeText = { (email)=> this.props.modificaAdicionaContatoEmail(email) }
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style = {{ color: '#ff0000', fontSize: 18 }} >
                        { this.props.adicionaContatoErro }
                    </Text>
                    <Button
                        onPress = {() => this.props.botaoAdicionarContatoEmail(this.props.adicionarContatoEmail)}
                        color = '#115E54'
                        title = 'Adicionar'
                    />
                </View>
            </View>
            )
        } else {
            return(
                <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{fontSize: 20, color: '#FFF' }}>
                        Cadastro realizadado com sucesso!
                    </Text>
                </View>
            )
        }


     }


    render (){
        return (
            <ImageBackground source={require('../img/bg.png')} style = {{flex: 1}}>
                {this.adicionaContato()}
            </ImageBackground>
        )
    }
 }

const mapStateToProps = state => (
    {
        adicionarContatoEmail: state.AppReducer.adicionarContatoEmail,
        adicionaContatoErro: state.AppReducer.adicionaContatoErro,
        adicionaContatoSucesso: state.AppReducer.adicionaContatoSucesso
    }
)

 export default connect(mapStateToProps, 
    { 
    modificaAdicionaContatoEmail, 
    botaoAdicionarContatoEmail 
    })(AdicionarContato);

