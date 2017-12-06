import React, {Component} from 'react';
import styles from './styles'
import ApiCall from '../../../Store/ApiStore/Api';
import {Alert} from 'react-native';

import {
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Text,} from 'react-native';
  // import { connect } from 'react-redux';
  import loginUser from '../action.js';

  class LoginForm extends Component {   
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          response: '',
          name: '',
          password: ''
        }
      }

      async signup(email, pass) {
      ApiCall.createUser(email,pass).then(function(result) {
        if (result != null) {
            Alert.alert ('Login Successfully');
            

        // callback(result)
        }else {

            
        // callback(result)
        }
        })
      }


  render() {

    return (
      <View
        style= {styles.container}>
         <StatusBar barStyle = 'light-content'
        />
        <TextInput
          placeholder= "Username or Email"
          placeholderTextColor= 'white'
          returnKeyType = 'next'
          keyboardType= 'email-address'
          autoCapitalize='none'
          autoCorrect= {false}
          onSubmitEditing={()=> this.passwordInput.focus()}
          onChangeText= {(text) => this.setState({name:text})}
          style= {styles.input}/>
          <TextInput
            placeholder= "Password"
            placeholderTextColor= 'white'
            returnKeyType = 'go'
            secureTextEntry
            ref = {(input) => this.passwordInput = input}
            onChangeText= {(text) => this.setState({password:text})}
            style= {styles.input}/>
          <TouchableOpacity
            style=  {styles.buttonContainer}
            onPress = {() => this.signup(this.state.name,this.state.password)}
            >
            <Text style= {styles.textButton}>Login</Text>
          </TouchableOpacity> 
     </View>
    );
  }
  
}

// const mapStateToProps = (user) => {
//   return {
//       isLoggedIn: user
//   };
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//       onLogin: (name,password) => { dispatch(loginUser(name,password)); },
//   }
// }
export default LoginForm;


// export default connect(
//   mapStateToProps,mapDispatchToProps
// )(LoginForm)


