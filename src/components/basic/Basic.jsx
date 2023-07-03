import React, { useEffect, useState } from "react";
import * as S from "./style";
import { listContent } from "./modal1Content";
import { generateData } from '../../action/generateData';

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
const initdata = {a:'id',b:'UUID',c:'0',status: '3'}

const listTitleSections = Object.keys(listContent);
function Basic() {
    const [state,setState] = useState([initdata])
    const [formatCondition, setFormatCondition] = useState(changeObject)
    const [previewContent, setPreviewContent] = useState('')
    const [formatState, setFormatState] = useState('CSV')

    useEffect(() => {
        const fetchData = async () => {
            setPreviewContent(await generateData(state, formatCondition, formatState));
        };
        fetchData();
    }, [state, formatCondition, formatState]);
      
    const [section, setSection] = useState('Advance')
    const [typeState, setTypeState] = useState(0)
    
    const handleChange = (index) => (e) => {
        const { value, name } = e.target;
        setState((prevState) => {
          const newState = [...prevState];
          newState[index] = { ...newState[index], [name]: value };
          return newState;
        });
      };
    
    const addColumn = () => {
        setState(state.concat(initdata))
    }
    const delColumn = (index) => {
        const temp2 = [...state];
        temp2.splice(index,1);
        setState(temp2)
    }

    const [showType, setShowType] = useState(false);
    const openType  = (index) => {
        setShowType(true);
        setTypeState(index);
    }
    const closeType = () => {
        setShowType(false);
    }
    const selectType = (newb) => {
        setState((prevState) => {
          const newState = [...prevState];
          newState[typeState] = { ...newState[typeState], b: newb };
          return newState;
        });
        setShowType(false);
      };
    const changeSection = (section) => {
        setSection(section)
    }

    return (
        <S.Basic>
            <S.Table>
                <div class="header">
                    <div class="jss1"></div>
                    <div class="jss2">Field Name</div>
                    <div class="jss3">Type</div>
                    <div class="jss4">Options</div>
                </div>
                <div class="body">
  {               state.map(({a,b,c,status},idx) => {
    const handleArrayChange = handleChange(idx);
    return <S.Column>
                        <div class="jss8">
                            <i class="fa-solid fa-grip-lines"></i>                        </div>
                        <div class="jss5">
                            <div>
                                <input value={a} name="a" onChange={handleArrayChange} type="text" />
                            </div>
                        </div>
                        <div class="jss6">
                            <button onClick={() => {openType(idx)}}>
                                <span>
                                    <div class="jss9" name = "b">{b}</div>
                                </span>
                            </button>
                        </div>
                        <div class="jss7">
                            {{
                                1: <div>
                                    
                                </div>,
                                2: <div>

                                </div>,
                                3: <div>

                                </div>
                            }[status]}
                            <div>
                                <label>blank:</label>
                                <input class="blank" name="c" onChange={handleArrayChange} value={c}></input>
                                <div>%</div>
                            </div>
                        </div>
                        <div class="jss10" onClick={() => {delColumn(idx)}}>
                            <i class="fa-regular fa-x"></i>
                        </div>
                    </S.Column>})   }

                    {showType && (
                            <S.Modal1>
                                <div className="modal1-component">
                                    <div className="modal1-header">
                                        <h2>Choose a Type</h2>
                                        <div className="modal1-container1">
                                            <div className="modal1-search">
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                                <input placeholder="유형 찾기 .."></input>
                                            </div>
                                            <div className="modal1-close" onClick={closeType}>
                                                <i className="fa-regular fa-x"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal1-content">
                                        <ul className="modal1-list-title">
                                            {listTitleSections.map((text) => {
                                                return <div className={text === section ? "modal1-title2" :  "modal1-title"} onClick={()=>{
                                                    changeSection(text)
                                                }}>
                                                    <div className="modal1-title-text">{text}</div>
                                                    <div className="modal1-title-count">({listContent[text].length})</div>
                                                </div> 
                                            })}
                                        </ul>
                                        <div className="modal1-list-content">
                                            {listContent[section].map(([title, description]) => {
                                                return <div className="modal1-item" onClick={() => {selectType(title)}}>
                                                    <p>{title}</p>
                                                    <font>{description}</font>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </S.Modal1>
                    )}
                </div>
                <div className="button">
                    <div className="add">
                        <button onClick={addColumn}>
                            <div>+ ADD ANOTHER FIELD</div>
                        </button>
                    </div>
                </div>
                <hr className="hr-1"></hr>
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
                <hr className="hr-2"></hr>
            </S.Table>
            <S.Result>
                <h2>Preview</h2>
                <textarea className="result-content" value = {previewContent}></textarea>
            </S.Result>
        </S.Basic>
    );
};

export default Basic;

const A = ({a,b,c}) => {
    return <div></div>
}

const B = ({a,b,c,d}) => {
   return <div></div> 
}