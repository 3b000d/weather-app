import React from 'react';
import ReactDOM from 'react-dom';
import "./../node_modules/bulma/css/bulma.min.css";
import "App.css";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
