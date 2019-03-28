import _ from 'lodash'
import React, { Component } from "react";
import { Grid, Segment } from 'semantic-ui-react'
import { Trending, Recent, Tag } from 'components/bbs';

const GridColumns = _.times(3, i => (
  <Grid.Column key={i}>
    <Trending />
  </Grid.Column>
));

class MainContentTemplate extends Component {

  render() {
    const mode = this.props.mode;
    console.log(mode);
    
    switch (mode) {
      case 'recent':
        return <Recent />
      case 'tags':
        return <Tag />
      default:
        return (
          <Grid container columns={3}>
            { GridColumns }
          </Grid>
        )
    }
  }
}

export default MainContentTemplate;
