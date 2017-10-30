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
  const count = state.questions.questions.filter((item) => item.status === 'new').length
  return {
    count
  }
}

export default connect(mapStateToProps)(TopBar);