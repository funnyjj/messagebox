import React from 'react';
import ReactDOM from 'react-dom';
//当一个组件默认导出的时候，导入变量名是可以随便起的
import App from './components/App';

ReactDOM.render(<App></App>,document.querySelector('#app'));
