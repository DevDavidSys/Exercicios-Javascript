import React from 'react';
import ReactDOM from 'react-dom';


class Car extends React.Component{
  render(){
    const mystyle = {background: "blue"};
    return(
      <h1 style={mystyle}>Olá Mundo</h1>
    );
  }
}
ReactDOM.render(<Car />, document.getElementById('root'));
