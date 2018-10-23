import * as React from "react";
import { Component } from "react";
import * as Redux from 'redux';
import { connect } from "react-redux";
import TextInput from './TextInput';
import { aTypes } from './constants';
import { ReduxState, InputProps } from './Interfaces';


const mapStateToProps = (state: ReduxState): ReduxState => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => {
    return {
        setTextInput: (name, text) => {
            dispatch({
                type: aTypes.TEXT,
                payload: {name, text}
            })
        },
        setMulti: (event) => {
            dispatch({
                type: aTypes.MULTI,
                payload: {name: event.target.name, checked: event.target.checked}
            })
        },
        setSingle: (event) => {
            dispatch({
                type: aTypes.SINGLE,
                payload: {name: event.target.name, checked: event.target.checked}
            })
        },
        handleSubmit: (event) => {
            dispatch({
                type: aTypes.RESET,
                payload: {event}
            })
        }
    }
}

const isChecked = (name, prop) => {
    return name === prop
}

const showReset = (p) => {
    return p.multi1 || p.multi2 || p.multi3 ||
            p.input1 !== "" || p.input2 !== "" || p.single
}

class App extends Component<InputProps, {}> {
    constructor (props: InputProps){
        super(props);
    }

  render () {
      let textInputs = [
        <TextInput name="input1" key="input1" value={this.props.input1} handler={this.props.setTextInput} />,
        <TextInput name="input2" key="input2" value={this.props.input2} handler={this.props.setTextInput} />
      ];
    return (
        <div>
            <form onSubmit={(e) => this.props.handleSubmit(e)}>
                {textInputs}
                <div>
                    <h3>Fruits</h3>
                    <label>
                        <input type="checkbox" name="multi1" checked={this.props.multi1} onChange={(e) => this.props.setMulti(e)} />Kiwi</label>
                    <label>
                        <input type="checkbox" name="multi2" checked={this.props.multi2} onChange={(e) => this.props.setMulti(e)} />Jackfruit</label>
                    <label>
                        <input type="checkbox" name="multi3" checked={this.props.multi3} onChange={(e) => this.props.setMulti(e)} />Mango</label>
                </div>
                <div>
                    <h3>Animals</h3>
                    <label>
                        <input type="checkbox" name="single1" checked={isChecked("single1", this.props.single)} onChange={(e) => this.props.setSingle(e)} />Tiger</label>
                    <label>
                        <input type="checkbox" name="single2" checked={isChecked("single2", this.props.single)} onChange={(e) => this.props.setSingle(e)} />Sloth</label>
                    <label>
                        <input type="checkbox" name="single3" checked={isChecked("single3", this.props.single)} onChange={(e) => this.props.setSingle(e)} />Cheetah</label>
                </div>
                { showReset(this.props) ? <input type="submit" value="Reset" /> : null }
            </form>
        </div>
    )
  }
}


export default connect<any, any>(mapStateToProps, mapDispatchToProps)(App) as any;