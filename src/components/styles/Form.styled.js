import styled from "styled-components";

export const Form = styled.form`
    input {
        width:200px;
        height:30px;
        background:#ffffff;
        border:4px solid red;
        border-radius:5px;
        font-size:18px;
        padding-left:8px;
    }
    button{
        width: 40px;
        height: 40px;
        border: 4px solid red;
        border-radius: 5px;
    }
    button:hover,
    button:focus {
        background-color: orange;
    }
`
