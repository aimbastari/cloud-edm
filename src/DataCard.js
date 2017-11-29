import React, { Component } from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';

import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'


const style = {
	position: 'absolute',
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	cursor: 'move',
}


const dataCardSource = {
	beginDrag(props) {
		const { id, left, top } = props
		return { id, left, top }
	},
}


class DataCard extends Component {
  	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		id: PropTypes.any.isRequired,
		left: PropTypes.number.isRequired,
		top: PropTypes.number.isRequired,
		hideSourceOnDrag: PropTypes.bool.isRequired,
		children: PropTypes.node,
	}
  
  
  
  render() {
    return (
        <Panel header={this.props.name} style={{border : '5px solid orange', margin: '10px'}}>
            <Glyphicon glyph={this.props.glyph}/>
        </Panel>
    );
  }
}

export default DragSource(ItemTypes.DATACARD, dataCardSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(DataCard)