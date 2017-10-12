import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import '../navigator.css';

class Nodes extends Component {
  printNodes() {
    const parentNode = this.props.nodes[this.props.nodeId];
    return parentNode.children.map ((nodeId) => {
      const childNode = this.props.nodes[nodeId];
      return (
        <Link to={'/nav/' + nodeId} key={v4()}>
          <div className='node'>
            <span className='nodeSpan'>
              {childNode.name}
            </span>
            <span className='nodeSpan'>
              {childNode.author}
            </span>
          </div>
        </Link>
      )
    });
  }

  render() {
    return (
      <div>
        <div className='colNames'>
          <span className='nodeSpan'>
              Название
            </span>
          <span className='nodeSpan'>
              Автор
            </span>
        </div>
        {this.printNodes()}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    nodeId: ownProps.nodeId,
    nodes: state.nodes
  };
}

export default connect(mapStateToProps)(Nodes);