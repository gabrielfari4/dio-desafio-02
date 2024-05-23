import { ButtonContainer } from "./styles";


function Button(props) {
  return (
    <ButtonContainer onClick={props.onClick}>
        Buscar
    </ButtonContainer>
  )
}

export default Button;