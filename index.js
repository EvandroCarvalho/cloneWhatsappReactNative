import firebase from 'firebase';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('whatsappClone', () => App);
