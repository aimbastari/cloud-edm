import React, { Component } from 'react';



class DataCard extends Component {
  render() {
    return (
        <div style={{border : '1px solid green' }}>
            <h1>{this.props.name}</h1>
            {this.props.icon}
        
        </div>
    );
  }
}
export default DataCard;