import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export default class Registry extends Component {
  handleClick = () => {

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

    const icon = <Icon 
      type={cardDetails.new.type}
      style={{
        color: cardDetails.new.color,
        fontSize: 20,
        lineHeight: 2.4
      }}
      onClick={cardDetails.new.click}/>;

    return (
      <Card className="card" title="Attendee Name" extra={icon}>
        <p>What is the question displayed here?</p>
      </Card>
    );
  }
};