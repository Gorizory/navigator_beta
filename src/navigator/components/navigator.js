import React from 'react';
import UpperPanel from '../containers/upperPanel';
import Nodes from '../containers/nodes';

const Navigator = (props) => (
  <div>
    <UpperPanel nodeId={props.match.params.nodeId}/>
    <Nodes nodeId={props.match.params.nodeId}/>
  </div>
);

export default Navigator;