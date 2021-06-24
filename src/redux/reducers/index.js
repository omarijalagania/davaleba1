import emailToolTip from './emailToolTip';
import userNameReducers from './userNameReducers';
import surNameReducer from './surNameReducer';
import ageReducer from './ageReducer';
import productReducer from './productReducer';
import itemReducer from './itemReducer';
import priceReducer from './priceReducer';
import allProReducer from './allProReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  emailToolTip,
  userNameReducers,
  ageReducer,
  surNameReducer,
  productReducer,
  priceReducer,
  itemReducer,
  allProReducer,
});

export default allReducers;
