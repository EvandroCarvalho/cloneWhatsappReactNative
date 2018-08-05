import React, { Component } from 'react';
import { StyleSheet, Dimensions, BackHandler } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu'
import Conversas from './Conversas';
import Contatos from './Contatos'

export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'Conversas', title: 'Conversas' },
      { key: 'Contatos', title: 'Contatos' },
    ],
  };

  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid)
  }
  
  _onBackAndroid = () => {
    if (this.lastBackPressed) {
        Actions.pop();
    }
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props =>  <TabBarMenu {...props} /> 

  _renderScene = SceneMap({
    Conversas,
    Contatos,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={{
          width: Dimensions.get('window').width,
          height: 0
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#115E54',
  },
  
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 12,
  },
  ViewTitulo: {
    backgroundColor: '#115E54', 
    paddingTop: 10
  },
});