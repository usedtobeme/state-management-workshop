import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export default class Registry extends Component {
  state = {
    status: 'new'
  }

  handleClick = () => {
    this.setState({status: 'seen'});
  }

  render() {
    const cardDetails = {
      new: {
        type: 'flag',
        color: '#e23',
        click: this.handleClick
      },
      seen: {
        type: 'check',
        color: '#3e2',
        click: null
      }
    };

    return (
      <Card className="card" title="Attendee Name" extra={<Icon type={cardDetails[this.state.status].type} style={{
        color: cardDetails[this.state.status].color,
        fontSize: 20,
        lineHeight: 2.4
      }} onClick={cardDetails[this.state.status].click}/>}>
        <p>What is the question displayed here?</p>
      </Card>
    );
  }
};