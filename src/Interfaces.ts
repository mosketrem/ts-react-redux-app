export interface ReduxState {
    input1: string;
    input2: string;
    multi1: boolean;
    multi2: boolean;
    multi3: boolean;
    single: string|null;
}

export interface InputProps {
    input1: string;
    input2: string;
    multi1: boolean;
    multi2: boolean;
    multi3: boolean;
    single: string|null;
    handleSubmit: Function;
    setTextInput: Function;
    setMulti: Function;
    setSingle: Function
};

export interface TextInputProps {
    name: string;
    value: string;
    handler: Function;
};