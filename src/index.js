import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="app">
    Hello Azure world
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // generate sw가 생성해줌
    window.navigator.serviceWorker.register('/service-worker.js');
  })
}
