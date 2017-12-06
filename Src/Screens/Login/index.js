import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';

import styles from './style';
import LoginForm from './ContainerComponents/controlView';

export default class Login extends Component {

  render() {
    return (
      <ImageBackground  source= {require('AwesomeProject/Src/Images/bg.png')} style = {styles.container}>
     
       <View style= {styles.logoContainer}>
       
          {/* <Text style={styles.textStyles}> Meet in the middle.</Text> */}
      </View>
     <KeyboardAvoidingView
      behavior = 'padding'
    >
    <LoginForm/>
    {/* {<ContentView/>} */}
    </KeyboardAvoidingView>
  
  </ImageBackground>
    );
  }
}


