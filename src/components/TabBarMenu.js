import React from 'react';

import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { habilitaInclusaoContato } from '../actions/AppActions'

const TabBarMenu = props => (
    <View style = {{ backgroundColor: '#115E54' }} >
        <StatusBar backgroundColor = '#114D44' />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }} >
                <View >
                    <Text style = {{ color: '#fff', fontSize: 20, marginLeft: 30 }} >WhatsApp Clone</Text>
                </View>
                <View style={ { flexDirection: 'row', justifyContent: 'center', marginRight: 20, alignContent: 'center' } }>
                    <View style={{ width: 50, justifyContent: 'center' }} >
                        <TouchableHighlight
                            onPress= {() => {Actions.adicionarContato(), props.habilitaInclusaoContato()}} 
                            underlayColor = '#115E54'
                        >
                            <Image source = {require('../img/adicionar-contato.png')}/>
                        </TouchableHighlight>
                    </View>
                    <View style={{ justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, color: '#fff' }} >Sair</Text>
                    </View>
                </View>
            </View>
            <TabBar {...props} style={{backgroundColor: '#115E54' }} indicatorStyle = {{backgroundColor: '#fff'}} />
    </View>
)

export default connect( null, { habilitaInclusaoContato } )(TabBarMenu)