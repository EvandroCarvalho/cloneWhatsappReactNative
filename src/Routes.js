import React from 'react';

import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato'
import Conversa from './components/Conversa';



const imageBack = require('./img/back.png')

export default Routes = () => (
    <Router 
        navigationBarStyle={{backgroundColor: "#115E54"}}
        titleStyle={{color: '#fff'}}
    >
        <Scene key ='root'>
            <Scene 
                key='formLogin'
                component={FormLogin} 
                titleStyle={{ color: '#FFF'}} 
                title='Login'
                hideNavBar
                initial = {true}
            />
            <Scene
                key='formCadastro'
                component={FormCadastro} 
                titleStyle={{ color: '#FFF', textAlign: 'center', flex: 1}} 
                title='Cadastro'
                navigationBarStyle={{ backgroundColor: '#115E54'}}
                backButtonImage = {imageBack}

            />
            <Scene
                key='boasVindas'
                component={BoasVindas} 
                titleStyle={{ color: '#FFF'}} 
                hideNavBar
            />
            <Scene
                key='principal'
                component={Principal} 
                titleStyle={{ color: '#FFF'}} 
                hideNavBar
                initial = {false}
                />
            <Scene
                key='adicionarContato'
                component={AdicionarContato} 
                titleStyle={{ color: '#FFF'}} 
                title = 'Adicionar Contato'
                backButtonImage = {imageBack}
                initial = {false}
            />
            <Scene
                key='conversa'
                component={Conversa} 
                titleStyle={{ color: '#FFF', textAlign: 'center', flex: 1}} 
                title = 'Conversa'
                backButtonImage = {imageBack}
                initial = {false}
            />
        </Scene>
    </Router>
)



