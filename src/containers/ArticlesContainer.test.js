import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesContainer from './ArticlesContainer';
import ShallowRenderer from 'react-test-renderer/shallow';

let container;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArticlesContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
