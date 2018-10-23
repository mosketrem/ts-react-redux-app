import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, DeepPartial} from 'redux';
import { Provider } from "react-redux";
import * as queryString  from "query-string";

import App from './src/App';
import { aTypes, zeroState } from './src/constants';
import { setBoolField, setTextField } from './src/untils';
import { ReduxState } from './src/Interfaces';

const updateStateFromURL = (tState, values) => {
    ["input1", "input2", "single"].forEach((name) => {setTextField(tState, values, name)});
    ["multi1", "multi2", "multi3"].forEach((name) => {setBoolField(tState, values, name)});
}

const reducer = (state: ReduxState, action: any): ReduxState => {
    let tempState: ReduxState = { ...state };
    switch (action.type) {
        case aTypes.TEXT:
            tempState[action.payload.name] = action.payload.text;
            break;
        case aTypes.MULTI:
            tempState[action.payload.name] = action.payload.checked;
            break;
        case aTypes.SINGLE:
            tempState.single = action.payload.checked ? action.payload.name : null;
            break;
        case aTypes.RESET:
            action.payload.event.preventDefault();
            tempState = zeroState;
            break;
    }
    state = tempState;
    const params = queryString.stringify(state);
    window.history.pushState(state, 'Reduxer', "?" + params);
    // console.log(state);
    return state;
};



const values = queryString.parse(window.location.search);
const initialState: ReduxState = { ...zeroState };
updateStateFromURL(initialState, values);
const store = createStore(reducer, initialState);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("app")
);
