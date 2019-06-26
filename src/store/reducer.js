

import { combineReducers } from 'redux' ;
import {reducer as header} from '../components/common/Header/store';
//分模块管理reducer
const rootReducer = combineReducers({
    header,
})
export default rootReducer;
  
 