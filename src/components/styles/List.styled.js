import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    list-style: none;
    
    li {
        padding: 5px;

    }
    a {
        border-radius: 5px;
        color: red;
        text-decoration: none;
        color: red;
    }
    a:visited {
        text-decoration: none;
        color: red;
    }
    a:hover {
        color: orange;
    }
    h3 {
        margin: 0;
    }
`