import React, { Component } from 'react';

import Board from './dragAndDrop/Board';



class AppDragAndDrop extends Component {
  render() {
    return (
        <Board knightPosition={[1,4]} />
    );
  }
}

export default AppDragAndDrop;
