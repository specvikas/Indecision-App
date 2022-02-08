import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './Components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//some comment

const appRoot = document.getElementById('area');
ReactDOM.render(<IndecisionApp />, appRoot);

