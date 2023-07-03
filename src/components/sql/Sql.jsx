import React, { useState, useEffect } from 'react';
import * as S from "./style";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { generateSql} from '../../action/generateSql';

const changeObject = {
    row: 100,
    CSV: {
        radio: true
    },
    XML: {
        input: 'dataset',
        input2: 'record'
    },
    JSON: {
        radio: true,
        radio2: true
    },
    SQL: {
        input: 'MOCK_DATA',
        radio: true
    }
}
function Sql() {
    const [previewContent, setPreviewContent] = useState('')
    const [formatState, setFormatState] = useState('CSV')

    const [formatCondition, setFormatCondition] = useState(changeObject)
    const [code, setCode] = useState(`
    CREATE TABLE PersonsNotNull
    (
      P_Id int,
      LastName varchar(255),
      FirstName varchar(255),
      Address varchar(255) NOT NULL,
      City varchar(255)
    )
  `);

    useEffect(() => {
        const fetchData = async () => {
            setPreviewContent(await generateSql(code, formatCondition, formatState));
        };
        fetchData();
    }, [code, formatCondition, formatState]);

    const handleCodeChange = (event) => {
      setCode(event.target.value);
    };

  
    return (
      <S.Sql>
        <div className='jss1'>Input</div>
        <hr className="hr-1"></hr>
        <S.Sql_Input>
            <textarea value={code} onChange={handleCodeChange} />
            <SyntaxHighlighter className='sql-preview' language="sql" style={oneLight}>
                {code}
            </SyntaxHighlighter>
        </S.Sql_Input>        
        <hr className="hr-2"></hr>
        <div className="mui-box">
                    <label># Rows:</label>
                    <input className="Rows" type = "number" value={formatCondition.row} onChange={(e) => {
                        setFormatCondition(prevState => {
                        return {...prevState, row: e.target.value === '' ? '' : parseInt(e.target.value, 10)}
                        })
                    }}/>
                    <label>Format:</label>
                    <select className="Format" onChange={(e) => {
                        setFormatState(e.target.value)
                    }}>
                        <option>CSV</option>
                        <option>XML</option>
                        <option>JSON</option>
                        <option>SQL</option>
                    </select>
                    {{
                        "CSV": (
                            <div className="format-value">
                            <label>Include:</label>
                            <input 
                                className="include-header" 
                                type="checkbox" 
                                checked={formatCondition.CSV.radio}
                                onChange={e => {
                                setFormatCondition(prevState => ({
                                    ...prevState,
                                    CSV: {
                                    ...prevState.CSV,
                                    radio: e.target.checked,
                                    },
                                }))
                                }}
                            />
                            <label>header</label>
                            </div>
                        ),
                        "XML": (
                            <div className="format-value">
                            <label>Root Element:</label>
                            <input 
                                value={formatCondition.XML.input}
                                onChange={e => {
                                setFormatCondition(prevState => ({
                                    ...prevState,
                                    XML: {
                                    ...prevState.XML,
                                    input: e.target.value,
                                    },
                                }))
                                }}
                            />
                            <label>Record Element:</label>
                            <input 
                                value={formatCondition.XML.input2}
                                onChange={e => {
                                setFormatCondition(prevState => ({
                                    ...prevState,
                                    XML: {
                                    ...prevState.XML,
                                    input2: e.target.value,
                                    },
                                }))
                                }}
                            />
                            </div>
                        ),
                        "JSON": (
                            <div className="format-value">
                            <input 
                                className="array" 
                                type="checkbox" 
                                checked={formatCondition.JSON.radio}
                                onChange={e => {
                                setFormatCondition(prevState => ({
                                    ...prevState,
                                    JSON: {
                                    ...prevState.JSON,
                                    radio: e.target.checked,
                                    },
                                }))
                                }}
                            />
                            <label>array</label>
                            <input 
                                className="include-null-values" 
                                type="checkbox" 
                                name="radio2" 
                                checked={formatCondition.JSON.radio2}
                                onChange={e => {
                                setFormatCondition(prevState => ({
                                    ...prevState,
                                    JSON: {
                                    ...prevState.JSON,
                                    radio2: e.target.checked,
                                    },
                                }))
                                }}
                            />
                            <label>include null values</label>
                            </div>
                        ),
                        "SQL": (
                            <div className="format-value">
                            <label>Table Name:</label>
                            <input 
                                value={formatCondition.SQL.input}
                                onChange={e => {
                                setFormatCondition(prevState => ({
                                    ...prevState,
                                    SQL: {
                                    ...prevState.SQL,
                                    input: e.target.value,
                                    },
                                }))
                                }}
                            />
                            <input 
                                className="include-create" 
                                type="checkbox" 
                                checked={formatCondition.SQL.radio}
                                onChange={e => {
                                setFormatCondition(prevState => ({
                                    ...prevState,
                                    SQL: {
                                    ...prevState.SQL,
                                    radio: e.target.checked,
                                    },
                                }))
                                }}
                            />
                            <label>include CREATE TABLE</label>    
                            </div>
                        )
                        }[formatState]}
                </div>
            <S.Result>
                <h2>Preview</h2>
                <textarea className="result-content" value={previewContent}></textarea>
            </S.Result>
      </S.Sql>
    );
  }

export default Sql;
