import * as React from "react";
import { Component } from "react";
import { TextInputProps } from './Interfaces';

class TextInput extends Component<TextInputProps>  {
  // constructor (props: TextInputProps){
  //     super(props);
  // }

  handleTextCahnge(event){
    this.props.handler(this.props.name, event.target.value);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
          <input type="text" value={this.props.value}
            onChange={this.handleTextCahnge.bind(this)} />
      </div>
    );
  }
}

export default TextInput;
