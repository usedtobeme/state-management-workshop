import React from 'react';
import { connect } from 'react-redux';
import { addNewQuestion, updateItem } from './actions';
import NewRegistry from '../../components/NewRegistry';
import Registry from '../../components/Registry';

const QuestionsContainer = (props) => {
  let questions = []
  for (let item in props.questions) {
    if (Object.props.questions.hasOwnProperty(item)){
      questions.push(
        <Registry key={item} question={props.questions[item]} handleClick={props.updateItem} />
      );
    }
  }
  return [
    <NewRegistry key="new" addNewQuestion={props.addNewQuestion}/>,
    ...questions
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
