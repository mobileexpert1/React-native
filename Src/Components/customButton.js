import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';

// export const customButton = (props) => {
//     return(
//            <TouchableOpacity>
//                <Text>{props.title}</Text>
//             </TouchableOpacity>  
            
//         )
// } 

// customButton.propTypes = {
//     title: React.PropTypes.any,
//     onPress: React.PropTypes.func,
//     // titleStyle: React.PropTypes.object,
//     // buttonStyle: React.PropTypes.object,
//     }

const VIEW_Margin = 10

export  const Button = (props) => {
    console.log(props.buttonStyle)
    return(
      <View style = {styles.container} >
         <TouchableOpacity style = {props.buttonStyle} onPress = {props.onPressButton}>
      <Text style = {props.textStyle}> {props.text}</Text>
    </TouchableOpacity>
    </View>
      )
    }

const styles = StyleSheet.create({
container: {
  margin: VIEW_Margin,
}

});

    
    Button.propTypes = {
      onPressButton: React.PropTypes.func,
      buttonStyle: React.PropTypes.number,
      text: React.PropTypes.string,
      textStyle: React.PropTypes.number
    }
    