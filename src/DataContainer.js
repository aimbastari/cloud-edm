import React, { Component } from 'react';
import {Grid, Col, Row, Panel} from 'react-bootstrap';

import DataCard from './DataCard.js';

class DataContainer extends Component {
  render() {
    return (
        <Grid fluid='false'>
            <Row>
                <Col xs={6} md={2} style={{border : '1px solid green'}} >
                    <DataCard name='source' glyph='cloud-upload'/>
                    <DataCard name='rules' glyph='repeat'/>
                    <DataCard name='sink' glyph='cloud-download'/>

                </Col>
                <Col xs={6} md={10} style={{border : '1px solid green', minHeight: '500px'}}>
                    <Panel>PIPELINE</Panel>
                </Col>
                
            </Row>
        </Grid>
    );
  }
}
export default DataContainer;