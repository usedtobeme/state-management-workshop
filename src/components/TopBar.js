import React from 'react';
import { Badge, Icon } from 'antd';
import { connect } from 'react-redux';

const TopBar = (props) => {
  return (
    <Badge count={props.count}>
      <Icon type="flag" style={{ fontSize: 36, color: '#eee'}} />
    </Badge>
  );
};

function mapStateToProps(state) {
  const count;
  for (item in state.questions.questions) {
    if (item.status === 'new') {
      count = count + 1;
    }
  }

  return {
    count
  }
}

export default connect(mapStateToProps)(TopBar);