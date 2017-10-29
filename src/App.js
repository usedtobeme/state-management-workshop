import React, { Component } from 'react';
import { Layout, Row } from 'antd';
import Registry from './components/Registry';
import NewRegistry from './components/NewRegistry';
import './App.css';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="fixed full tar">
        </Header>
        <Content style={{ marginTop: 64 }}>
          <Row type="flex" justify="start">
            <NewRegistry/>
            <Registry/>
            <Registry/>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default App;
