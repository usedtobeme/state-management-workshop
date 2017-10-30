import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export default class Registry extends Component {
  handleClick = () => {
    this.props.handleClick({
      ...this.props.question,
      status: 'seen'
    })
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
      <Card className="card" title={this.props.question.name} extra={<Icon type={cardDetails[this.props.question.status].type} style={{
        color: cardDetails[this.props.question.status].color,
        fontSize: 20,
        lineHeight: 2.4
      }} onClick={cardDetails[this.props.question.status].click}/>}>
        <p>{this.props.question.text}</p>
      </Card>
    );
  }
};