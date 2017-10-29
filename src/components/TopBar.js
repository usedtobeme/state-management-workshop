import React, { Component } from 'react';
import { Badge, Icon } from 'antd';


class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {count: 0};
  }

  counterUp = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <Badge count={this.state.count}>
        <Icon type="flag" style={{ fontSize: 36, color: '#eee'}}  onClick={this.counterUp}/>
      </Badge>
    );
  }
};

export default TopBar;