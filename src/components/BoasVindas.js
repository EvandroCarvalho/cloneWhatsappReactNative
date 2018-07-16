import React from 'react';

import { View, Image, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <ImageBackground style={{flex: 1}} source={require('../img/bg.png')}>
        <View style={styles.principal}>
            <View style={styles.ViewBemvindo} >
                <Text style={{fontSize: 20, color: '#fff'}}>Seja Bem-vindo</Text>
                <Image source={require('../img/logo.png')} />
            </View>
            <View style={styles.ViewBotao}>
                <Button
                    title = 'Fazer Login'
                    onPress = {() => Actions.formLogin()}
                    color = '#115E54'
                />
            </View>
        </View>
    </ImageBackground>
);

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        padding: 15
    },
    ViewBemvindo: {
        flex: 2, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    ViewBotao: {
        flex:1, 
    justifyContent: 'center',

    }
    



})