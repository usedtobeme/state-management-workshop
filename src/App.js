import React, { Component } from 'react';
import { Layout, Row } from 'antd';
import { connect } from 'react-redux';
import QuestionsContainer from './containers/questions'
import { syncQuestions } from './containers/questions/actions';
import TopBar from './components/TopBar';
import './App.css';

const { Header, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    props.syncQuestions();
  }

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

function mapDispatchToProps(dispatch) {
  return {
    syncQuestions: () => dispatch(syncQuestions())
  }
}

export default connect(null, mapDispatchToProps)(App);
