import React from 'react';

import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';

export default Routes = () => (
    <Router>
        <Scene key ='root'>
            <Scene 
                key='formLogin'
                component={FormLogin} 
                titleStyle={{ color: '#FFF'}} 
                title='Login'
                navigationBarStyle={{ backgroundColor: '#115E54' }}
            />
            <Scene
                key='formCadastro'
                component={FormCadastro} 
                titleStyle={{ color: '#FFF'}} 
                title='Cadastro'
                navigationBarStyle={{ backgroundColor: '#115E54' }}
            />
            <Scene
                key='boasVindas'
                component={BoasVindas} 
                titleStyle={{ color: '#FFF'}} 
                hideNavBar
                navigationBarStyle={{ backgroundColor: '#115E54' }}
            />
        </Scene>
    </Router>
)



