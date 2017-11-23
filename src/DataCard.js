import React, { Component } from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';


class DataCard extends Component {
  render() {
    return (
        <Panel header={this.props.name} style={{border : '5px solid orange', margin: '10px'}}>
            <Glyphicon glyph={this.props.glyph}/>
        </Panel>
    );
  }
}
export default DataCard;