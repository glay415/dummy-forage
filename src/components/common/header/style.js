import { Link } from "react-router-dom";
import styled from "styled-components"

const MainHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    margin: 0;
    padding: 0;
    background-color: #243344;
    
    * {
        background-color: transparent;
    }
    a {
        color: #f0f4f5;
        text-decoration: none;
    }
    .logo {
        display: flex;
        margin-left: 17%;
        i {
            color: #d49466;
            font-size: 33px;
            margin-right: 7px;
        }
        a {
            font-size: 35px;
            font-family: 'Nanum Brush Script', cursive;
        }
    }

    nav {
        margin: 0;
        justify-content: space-between;
        list-style: none;
        font-size: 15px;

        .ul {
            padding: 0;
        }
    }

    button {
        position: absolute;
        right: 15%;
        border: none;
        outline: none;
        color: #f0f4f5;
    }
`;

const Link2 = styled(Link)`
    padding-right: 40px;
`;

const LoginModal = styled.div`
    box-sizing: border-box;
    box-shadow: 2px 2px 3px #666;
    z-index: 999;
    width: 270px;
    height: 205px;
    background-color: white;
    position: absolute;
    top: 50px;
    right: calc(15% - 125px);
    border-radius: 5px;
    text-align: center;
    padding-top: 20px;

    input {
        box-sizing: border-box;
        margin-top: 7px;
        height: 35px;
        width: 220px;
        border-style: solid;
        border-radius: 4px;
        opacity: 0.6;
        border-width: 1px;
        color: black;
        padding-left: 10px;
    }
    .login-button {
        opacity: 1;
        margin: 0;
        width: 220px;
        height: 35px;
        background-color: #d49466;
        border-radius: 2px;
        cursor: default;
        margin-top: 18px;
        margin-bottom: 8px;
        text-align: center;
        color: white;
        font-weight: 600;
    }
    .login-footer {
        justify-content: center;
        display: flex;
        div {
            padding-right: 10px;
        }
        font-size: 12px;
    }
    .sign-button {
        color: #555;
        cursor: default;
    }
    .not-found {
        font-size: 14px;
        color: red;
    }
`;

const SignModal = styled.div`
    box-sizing: border-box;
    box-shadow: 2px 2px 3px #666;
    z-index: 999;
    width: 270px;
    height: 300px;
    background-color: white;
    position: absolute;
    top: 10px;
    right: calc(15% - 125px);
    border-radius: 5px;
    text-align: center;
    padding-top: 20px;
    
    input {
        box-sizing: border-box;
        margin-top: 7px;
        height: 35px;
        width: 220px;
        border-style: solid;
        border-radius: 4px;
        opacity: 0.6;
        border-width: 1px;
        color: black;
        padding-left: 10px;
    }
    .sign-button {
        opacity: 1;
        margin: 0;
        width: 220px;
        height: 35px;
        background-color: #d49466;
        border-radius: 2px;
        cursor: default;
        margin-top: 18px;
        margin-bottom: 8px;
        text-align: center;
        color: white;
        font-weight: 600;
    }
    .sign-footer {
        justify-content: center;
        display: flex;
        div {
            padding-right: 10px;
        }
        font-size: 12px;
    }
    .login-button {
        color: #555;
        cursor: default;
    }
    .not-match {
        font-size: 14px;
        color: red;
    }
    
`

export { MainHeader, Link2, LoginModal, SignModal }