import styled from "styled-components"

const Basic = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;

    margin-top: 32px;
    padding-bottom: 72px;

    * {
        box-sizing: border-box;
    }
`

const Table = styled.div`
    padding: 8px;
    margin-left: 15%;
    margin-right: 15%;
    .header {
        display: flex;
        opacity: 0.6;
        line-height: 1.5;
        margin-bottom: 8px;
        letter-spacing: 0.00938em;
        font-size: 1.2em;
        font-weight: 400;
    }
    .header div {
        padding-left: 16px;
        
    }

    .header .jss1 {
        padding-right: 8px;
    }
    
    .header .jss2, .jss3 {
        width: 200px;
        min-width: 200px;
        padding-right: 8px;
    }
    .header .jss4 {
        padding-right: 8px;
        width: 330px;
    }

    .button .add  {
        padding-top: 30px;
        padding-left: 30px;
        width: 250px;
    }
    .button .add button {
        height: 40px;
        font-size: 14px;
        box-sizing: border-box;
        width: 100%;
        padding: 5.5px 14px;
        border-radius: 4px;
        border-width: 1px;
        border-color: gray;
        border-style: solid;  
        
        font-weight: 500; 
    }
    .mui-box {
        padding: 10px 30px;
        display: flex;
        align-items: center;
        
        input {
            font-size: 14px;
            height: 40px;
            width: 120px;
            padding: 9px 14px 9px 14px;
            border-radius: 4px;
            border-width: 1px;
            border-color: gray;
            border-style: solid;

            margin: 0 20px 0 8px;
        }
        label {
            font-size: 15px;
        }
        .Rows {
            padding: 10px 10px;
            text-align: right;
        }
        .Format {
            font-size: 14px;
            height: 40px;
            width: auto;
            padding: 9px 5px 9px 14px;
            border-radius: 4px;
            border-width: 1px;
            border-color: gray;
            border-style: solid;
            margin: 0 20px 0 8px;
        }
        .format-value {
            
            align-items: center;
            display: flex;
            .include-header {
                margin: 0 14px 0 20px;
                padding: 0;
                width: 20px;
                height: 20px;
            }
            .array {
                margin: 0 14px 0 20px;
                padding: 0;
                width: 20px;
                height: 20px;    
            }
            .include-null-values {
                margin: 0 14px 0 20px;
                padding: 0;
                width: 20px;
                height: 20px;       
            }
            .include-create {
                margin: 0 14px 0 20px;
                padding: 0;
                width: 20px;
                height: 20px;
            }
        }
    }
`

const Column = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
    .option {
        display: flex;
    }

    .jss5 {
        width: 200px;
        min-width: 200px;
        padding-right: 8px;
    }
    .jss5 div {
        width: 100%;
        box-sizing: border-box;
    }
    .jss5 div input {
        font-size: 14px;
        height: 40px;
        padding: 9px 14px 9px 14px;
        border-radius: 4px;
        border-width: 1px;
        border-color: gray;
        border-style: solid;
    }
    .jss5 div input:hover {
        border-color: black;
    }

    .jss8 {
        top: 4px;
        cursor: row-resize;
        opacity: 0.6;
        position: relative;
        margin-top: 5px;
        margin-left: 5px;
        margin-right: 8px;
    }
    .jss8 i {
        fill: currentColor;
        width: 1em;
        height: 1em;
        display: inline-block;
        font-size: 1rem;
        user-select: none;
    }

    .jss6 {
        width: 200px;
        min-width: 200px;
        padding-right: 8px;
    }
    .jss6 button{
        height: 40px;
        font-size: 14px;
        box-sizing: border-box;
        width: 100%;
        padding: 5.5px 14px;
        border-radius: 4px;
        border-width: 1px;
        border-color: gray;
        border-style: solid;
    }
    .jss6 button:hover {
        background-color: #f0f0f0;
        * {
            background-color: #f0f0f0;
        }
    }
    .jss6 button span {
        display: flex;
        text-align: left;
        white-space: nowrap;
        text-transform: none;
        justify-content: flex-start;
    }
    .jss6 button span div {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.75;
        opacity: 100;
        color: black;
    }
    
    .jss7 {
        display: flex;
    }
    .jss7 div {
        display: flex;
        position: relative;
    }
    .jss7 div div {
        position: absolute;
        right: 20px;
        top: 10px;
    }
    .jss7 input {
        width: 60px;
        min-width: 60px;

        font-size: 14px;
        height: 40px;
        border-radius: 4px;
        border-width: 1px;
        border-color: gray;
        border-style: solid;
        margin-right: 8px;

        text-align: center;
    }
    .jss7 .blank {
        text-align: right;
        padding-right: 25px;
    }
    .jss7 .min, .jss7 .max {
        width: 40px;
        min-width: 40px;

    }
    .jss7 input:hover {
        border-color: black;
    }
    .jss7 label {
        margin-right: 8px;
        margin-top: 10px;
    }
    .jss10 i{
        font-size: 15px;
        padding-top: 10px;
        padding-left: 10px;
        opacity: 0.6;
    }
`
const Modal1 = styled.div`
    z-index: 999;
    background-color:rgba(0, 0, 0, 0.3);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .modal1-component {
        background-color: white;
        height: calc(100vh - 120px);
        width: 65%;
        text-align: center;
        margin: 32px auto;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .modal1-header {
        background-color: #fafafa;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 12px 24px 12px 24px;
    }
    .modal1-header h2 {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.2;
        letter-spacing: -0.00833em;
        margin: 0;
        padding-right: 10px;
    }
    .modal1-container1 {
        display: flex;
        align-items: center;
    }
    .modal1-search {
        border-style: solid;
        border-width: 1px;
        border-radius: 4px;
        border-color: gray;
        display: inline-flex;
        position: relative;
        width: 250px;
        height: 37px;
        margin-right: 30px;
        align-items: center;
        opacity: 0.6;
        padding-left: 10px;
    }
    .modal1-search:hover {
        opacity: 0.8;
        border-width: 2px;
    }
    .modal1-search i {
        margin-right: 15px;
    }
    .modal1-search input {
        border-style: none;
    }
    .modal1-search input:focus {
        border: 0;
        outline: 0;
    }
    .modal1-close {
        opacity: 0.6;
    }
    .modal1-close:hover {
        opacity: 0.8;
        i {
            background-color: #ebebeb;
        }
    }
    .modal1-close i {
        width: 25px;
        height: 25px;
        display: inline-block;
        font-size: 1rem;
        line-height: 25px;
        user-select: none;
        border-radius: 10px;
    }
    .modal1-content {
        background-color: white;
        height: 100%;
        display: flex;
    }
    .modal1-list-title {
        width: 180px;
        height: 100%;
        margin: 0;
        text-align: start;
        padding-top: 10px;
        padding-left: 0;
    }
    .modal1-title {
        font-weight: 500;
        font-size: 15px;
        padding: 12px 16px;
        width: 180px;
        display: flex;
    }
    .modal1-title2 {
        font-weight: 500;
        font-size: 15px;
        padding: 12px 16px;
        width: 180px;
        display: flex;
        background-color: #e6e6e6;
        border-right-style: solid;
        border-right-width: 4px;
        border-right-color: rgb(212, 148, 102);
    }
    .modal1-title:hover {
        background-color: #ebebeb;
        div {
            background-color: #ebebeb;    
        }
    }
    .modal1-title-text {
        padding-right: 5px;
        background-color: transparent;
    }
    .modal1-title-count {
        font-weight: 100;
        opacity: 0.6;
        background-color: transparent;
    }
    .modal1-list-content {
        overflow-y: auto;
        width: 100%;
        display : flex;
        flex-wrap: wrap;
        background-color: white;
        align-content: flex-start;
        padding: 8px;
        max-height: 100%;
    }
    .modal1-item{
        text-align: start;
        height: 110px;
        width: 240px;
        background-color: white;
        padding: 12px;
    }
    .modal1-item p {
        margin: 0;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        background-color: white;
    }
    .modal1-item font {
        font-size: 13px;
        font-style: italic;
        line-height: 1.66;
        letter-spacing: 0.03333em;
        opacity: 0.6;
    }
    .modal1-item:hover {
        background-color: #fafafa;
        p {
            background-color: #fafafa;
        }
    }
`

const Result = styled.div`
    margin-left: 15%;
    margin-right: 15%;
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
        white-space: 'pre-line';
    }
`

export { Basic, Table, Column, Modal1, Result }