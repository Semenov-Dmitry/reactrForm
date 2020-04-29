import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(  <Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));


// import showResults from "../src/redux/showResults";
// import SyncValidationForm from '../src/redux/App';
// import store from "../src/redux/store";
//
//
// ReactDOM.render(
//     <Provider store={store}>
//         <div style={{ padding: 15}}>
//             <SyncValidationForm onSubmit={showResults} />
//
//         </div>
//     </Provider>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
