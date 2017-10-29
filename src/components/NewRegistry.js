import React, { Component } from 'react';
import { Button, Card, Form, Input } from 'antd';

const FormItem = Form.Item;

class NewRegistry extends Component {
  displayForm = () => {

  }

  handleChange = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <Card className="card">
        {false ? (
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              <Input name="name" placeholder="Name" onChange={this.handleChange}/>
            </FormItem>
            <FormItem>
              <Input name="question" placeholder="Question" onChange={this.handleChange}/>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </FormItem>
          </Form>
        ) : (
          <Button type="primary" icon="plus" onClick={this.displayForm}>
            Add New
          </Button>
        )}
      </Card>
    );
  }
};

export default NewRegistry;