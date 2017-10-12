import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../navigator.css';

class UpperPanel extends Component {

  printPath(nodeId) {
    if (nodeId === undefined) {
      return (
        <span>
          /
        </span>
      )
    }
    const node = this.props.nodes[nodeId];
    return (
      <span>
        {this.printPath(node.parent)}
        <Link to={'/nav/' + nodeId}>
          {node.name}
        </Link>
        /
      </span>
    );
  }

  render() {
    return (
      <div className='upperPanel'>
        <div className='path'>
          {this.printPath(this.props.nodes[this.props.nodeId].parent)}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    nodeId: ownProps.nodeId,
    nodes: state.nodes,
    path: state.path
  };
}

export default connect(mapStateToProps)(UpperPanel);