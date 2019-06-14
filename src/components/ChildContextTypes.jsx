import React from 'react';
import {PropTypes} from 'prop-types';
import { setTimeout } from 'timers';

class Child extends React.Component {
  constructor (props, context) {
    super(props);
    console.log('构造函数获取 Child context: ', context);
  }

  componentWillReceiveProps (nextProps, nextContext) {
    console.log('componentWillReceiveProps 获取 context: ', nextContext);
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate 获取 context: ', nextContext);
    return true;
  }

  componentWillUpdate (nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate 获取 context: ', nextContext);
  }
  render () {
    return (
      <>
        <p>{this.context.value1}</p>
        <p>{this.context.value2}</p>
      </>
    );
  }
}

Child.contextTypes = {
  value1: PropTypes.string,
  value2: PropTypes.string
};

class Parent extends React.Component {
  render () {
    return <Child />
  }
}

class ChildContextTypesDemo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      childContext: {
        value1: 'context1',
        value2: 'context2'
      }
    };
  }
  getChildContext () {
    return this.state.childContext;
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        childContext: {
          value1: 'update context1',
          value2: 'update context2'
        }
      });
    }, 2000);
    
  }
  render () {
    return <Parent />
  }
}

ChildContextTypesDemo.childContextTypes = {
  "value1": PropTypes.string,
  "value2": PropTypes.string
};


export default ChildContextTypesDemo;
