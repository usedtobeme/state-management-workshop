import React, { Component } from 'react';
import { Layout } from 'antd';
import TopBar from './components/TopBar';
import NewRegistry from './components/NewRegistry';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <TopBar/>
        </Header>
        <Content>
          <NewRegistry/>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default App;
