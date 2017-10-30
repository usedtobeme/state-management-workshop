import React, { Component } from 'react';
import { Layout, Row } from 'antd';
import QuestionsContainer from './containers/questions'
import TopBar from './components/TopBar';
import './App.css';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="fixed full tar">
          <TopBar/>
        </Header>
        <Content style={{ marginTop: 64 }}>
          <Row type="flex" justify="start">
            <QuestionsContainer />
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default App;
