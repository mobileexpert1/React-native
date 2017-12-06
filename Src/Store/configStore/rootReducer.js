import { combineReducers } from 'redux';
import loginreducer from '../../Screens/Login/reducer.js'
import sceneReducer from '../../Router/reducer'
 
const rootReducer = combineReducers({
    loginreducer,
    sceneReducer
});
 
export default rootReducer;