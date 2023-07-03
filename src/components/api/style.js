import styled from "styled-components"

const Api = styled.div`
    margin-top: 32px;
    margin-left: 15%;
    margin-right: 15%;

    .http-head {
        display: flex;
        height: 35px;
    }
    .http-method {
        width: 105px;
    }
    .http-url {
        width: 100%;
        border-style: solid;
        border-width: 1px;
        outline: none;

    }  
    .http-body {
        width: 100%;
        height: 300px;
        border: none;
        resize: none;
        border-style: solid;
        border-width: 1px;
        outline: none;
    }
    .footer {
        display: flex;
        align-items: center;
        margin-top: 15px;
        .send-button {
            width: 200px;
            height: 35px;
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
            margin-right: 20px;
        }
        .count {
            height: 35px;
            border-style: solid;
            border-width: 1px;
            border-radius: 4px;
        }
        }
`
const Result = styled.div`
    h2 {
        font-weight: 500;
        font-size: 20px;
        opacity: 0.6;
    }
    .result-content {
        border-style: solid;
        border-width: 1px;
        width: 100%;
        height: 500px;
        border-radius: 4px;
        opacity: 0.6;
    }
`
export { Api, Result }