import React, { Component } from "react";
import { Trending, Recent, Tag } from 'components/bbs';

class MainContentTemplate extends Component {

  render() {
    const mode = this.props.mode;
    console.log(mode);
    
    switch (mode) {
      case 'recent':
        return <Recent />
      case 'tag':
        return <Tag />
      default:
        return <Trending />
    }
  }
}

export default MainContentTemplate;
