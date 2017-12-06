import ApiCall from '../../Store/ApiStore/Api.js'
import {Alert} from 'react-native';

export function loginUser(result) {
 return {
     type: 'LoginSuccess',
     data: result
 }
}

export function logging() {
    return {
        type: 'Logging',
    }
   }
   export function faliure() {
    return {
        type: 'LoginFaliure',
    }
   }
//Login User
export default function signup(name,password) {
    return (dispatch) => {
        dispatch(logging())
         ApiCall.createUser(name,password).then(function(result) {
        if (result != null) {
            Alert.alert ('Login Successfully');
            dispatch(loginUser(result))

        // callback(result)
        }else {

            dispatch(faliure) 
        // callback(result)
        }
        })
    }
    }