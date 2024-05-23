import styled from "styled-components";

export const ButtonContainer = styled.button`
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    width: 30%;
    margin: 20px;
    background-color: #FAFAFA60;  
    font-size: 20px;
    font-weight: 700;
    color: #BBBBBB;
    &: hover {
        border: 1px solid #000000;
        background-color: #FAFAFA60;
        color: #000000;
        cursor: pointer;
    }
`