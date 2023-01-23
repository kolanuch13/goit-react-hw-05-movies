import styled from "styled-components";


export const Header = styled.header`
    display: flex;
    align-items: center;
    background-color: orange;
    font-weight: 700;
    color: red;
    gap: 30px;

    nav {
        display: flex;
        gap: 30px;
        .link {
            padding: 5px;
            border-radius: 5px;
            text-decoration: none;
        }
        .link:visited {
            color: red;
        }
        .link:hover {
            background-color: red;
            color: orange;
        }
    }
`