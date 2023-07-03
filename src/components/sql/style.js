import styled from "styled-components"

const Sql = styled.div`
    margin-top: 32px;
    margin-left: 15%;
    margin-right: 15%;
    .jss1 {
        font-weight: 500;
        font-size: 20px;
        opacity: 0.6;
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
            padding: 0;
            text-align: right;
            height: 40px;
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

const Sql_Input = styled.div`
    display: flex;
`

export { Sql, Sql_Input, Result }
