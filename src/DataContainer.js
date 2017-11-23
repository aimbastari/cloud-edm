import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import DataCard from './DataCard.js';

class DataContainer extends Component {
  render() {
    return (
        <Grid>
            <Row>
                <Col xs={6} md={2} style={{border : '1px solid green'}} >
                    <DataCard name='source'/>
                    <DataCard name='rules'/>
                    <DataCard name='sink'/>

                </Col>
                <Col xs={6} md={10} style={{border : '1px solid green'}}>
                
                
                </Col>
                
            </Row>
        </Grid>
    );
  }
}
export default DataContainer;