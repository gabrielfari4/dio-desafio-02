import { InputContainer } from "./styles";

function Input(props) {
  return (
    <InputContainer>
        <input type="text" value={props.value} onChange={props.onChange}/>
    </InputContainer>
  )
}

export default Input;