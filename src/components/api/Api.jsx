import React, { useState, useEffect } from "react";
import * as S from "./style";
import { filterApi } from '../../action/sendApi';


function Api() {
    const [body, setBody] = useState(`{
        "someField": "example",
        "anotherField": 123,
        "nestedObject": {
          "nestedField": true
        }
}`)
    const [url, setUrl] = useState('http://localhost:5000/test')
    const [count, setCount] = useState(1)

    const [previewContent, setPreviewContent] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const fetchData = async () => {
                const result = await filterApi(url, body, count)
                setPreviewContent(result.join('\n'));
            };
            fetchData();
        };
        fetchData();
    }, [url, body, count]);

    return (
        <S.Api>
            <div className="http-head">
                <select className="http-method">
                    <option>GET</option>
                    <option>POST</option>
                    <option>UPDATE</option>
                    <option>DELETE</option>
                </select>
                <input className="http-url" value={url} onChange={(e) => {
                    setUrl(e.target.value)
                }}></input>
            </div>
            <textarea type="text" className="http-body" value={body} onChange={(e) => {
                setBody(e.target.value)
            }}></textarea>
            <div className="footer">
                <button className="send-button">SEND</button>
                <label>send count:</label>
                <input className="count" value={count} onChange={(e) => {
                    setCount(e.target.value)
                }}></input>
            </div>
            <hr className="hr-1"></hr>
            <S.Result>
                <h2>Result</h2>
                <textarea className="result-content" value={previewContent}></textarea>
            </S.Result>
        </S.Api>
    );
};

export default Api;
{/* <select className="Format" onChange={(e) => {
                        setFormatState(e.target.value)
                    }}>
                        <option>CSV</option>
                        <option>XML</option>
                        <option>JSON</option>
                        <option>SQL</option>
                    </select> */}