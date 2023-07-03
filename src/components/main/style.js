import styled from "styled-components"

const MainPage = styled.div`
    background-color: #fafafa;

    div {
        display: flex;
        justify-content: center;
    }

    .group-img {
        width: 280px;
        height: 15px;
        padding-left: 30px;
    }
    .group {
        display: flex;
        align-items: center;
    }
    .circle {
        width: 30px;
        height: 30px;
        border-style: solid;
        border-radius: 50%;
        border-width: 1px;
        position: absolute;
        margin-left: 450px;
        background-color: rgba(0, 0, 0, 0);
        border-color: rgba(0, 0, 0, 1);
    }
    .circle:hover {
        border-color: #d49466;
        border-width: 3px;
    }
`
const StyledTitle = styled.h2`
    background-color: #fafafa;
    font-family: 'Nanum Pen Script', cursive;
    font-size: 100px;
    font-weight: 300;
    text-align: center;
    margin: 0;
    margin-top: 10%;
`;
const StyledContent = styled.h3`
    background-color: #fafafa;
    font-family: 'Nanum Brush Script', cursive;
    font-size: 22px;
    opacity: 0.6;
    font-weight: 100;
    margin: 0;
    margin-top: 20px;
`
const StyledContent2 = styled.h4`
    background-color: #fafafa;
    font-family: 'Nanum Pen Script', cursive;
    font-size: 30px;
    font-weight: 300;
`

export { MainPage, StyledTitle, StyledContent, StyledContent2 }