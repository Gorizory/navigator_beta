import {combineReducers} from 'redux';
import Nodes from './nodes';

const allReducers = combineReducers({
  nodes: Nodes,
});

export default allReducers;