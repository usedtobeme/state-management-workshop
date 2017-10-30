import React from 'react';
import { connect } from 'react-redux';
import { addNewQuestion, updateItem } from './actions';
import NewRegistry from '../../components/NewRegistry';
import Registry from '../../components/Registry';

const QuestionsContainer = (props) => {
  return [
    <NewRegistry key="new" addNewQuestion={props.addNewQuestion}/>,
    ...props.questions.map((item, index) => <Registry key={index} question={item} handleClick={props.updateItem} />)
  ];
}

function mapStateToProps (state) {
  return {
    questions: state.questions.questions
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewQuestion: (question) => dispatch(addNewQuestion(question)),
    updateItem: (item) => dispatch(updateItem(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
