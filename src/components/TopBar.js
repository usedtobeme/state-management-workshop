import React, { Component } from 'react';
import { Badge, Icon } from 'antd';


class TopBar extends Component {
  render() {
    return (
      <Badge count={10}>
        <Icon type="reload" />
      </Badge>
    );
  }
};

export default TopBar;