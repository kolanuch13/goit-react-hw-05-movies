import styled from "styled-components";

export const Movie = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
    list-style: none;

`
export const MovieInfo = styled.div`
    width: 50vw;
    margin-left: 20px;
    h1 {
        color: red;
        margin: 40px 0px;
    }
`
export const MovieMoreInfo = styled.div`
width: 50vw;
ul {
    list-style: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
    height: 50px;
    align-items: center;
}
a {
    text-decoration: none;
    font-weight: 700;
    color: red;
    gap: 30px;
}

a:hover,
a:focus {
    color: orange;
}
`