import React from 'react';
/**
 *  创建执行上下文
 *  获取 Provider, Consumer 对象
 */
const Context = React.createContext();

class Child extends React.Component {
  render () {
    return (
      <Context.Consumer>
        {({value1, value2}) => {
          return (
            <>
              <p>CreateContext {value1}</p>
              <p>CreateContext {value2}</p>
            </>)
        }}
      </Context.Consumer>
    );
  }
}

class Parent extends React.Component {
  render () {
    return (
      <Child />
    );
  }
}

class CreateContextComp extends React.Component {

  render () {
    return (
      <Context.Provider value={
        {
          value1: 'value1',
          value2: 'value2'
        }
      }>
        <Parent />
      </Context.Provider>
    );
  }
}

export default CreateContextComp;
