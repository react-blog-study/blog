import _ from 'lodash'
import React, { Component } from "react";
import { Grid } from 'semantic-ui-react'
import { Trending, Recent, Tag } from 'components/bbs';

const NumberOfTimes = 4;

const GridColumns = _.times(NumberOfTimes, i => (
  <Grid.Column key={i}>
    <Trending />
  </Grid.Column>
));

const GridRows = _.times(NumberOfTimes, i => (
  <Grid.Row key={i}>
    { GridColumns }
  </Grid.Row>
));

class MainContentTemplate extends Component {

  render() {
    const mode = this.props.mode;
    console.log(mode);
    
      if(mode === 'tags') {
        return <Tag />
      } else {
        return (
        <Grid container columns={4}>
          { GridRows }
        </Grid>
        )
      }
  }
}

export default MainContentTemplate;
