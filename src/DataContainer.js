import React, { Component } from 'react';

import {Grid, Col, Row} from 'react-bootstrap';


class DataContainer extends Component {
  render() {
    return (
        <Grid>
            <Row>
                <Col xs={6} md={2} style={{border : '1px solid green'}} >Icons</Col>
                <Col xs={6} md={10} style={{border : '1px solid green'}}>Pipeline</Col>
                
            </Row>
        </Grid>
    );
  }
}
export default DataContainer;