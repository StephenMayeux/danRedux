import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button
          onClick={() => this.props.actions.incrementNumber()}
        >Increment</button>
        <button
          onClick={() => this.props.actions.decrementNumber()}
        >Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // this.props.counter
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
