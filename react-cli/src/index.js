import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import NotesApp from './components/NotesApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NotesApp />, document.getElementById('root'));
registerServiceWorker();
