import axios from 'axios';

export const generateSql = async (code, formatCondition, formatState) => {
    const data = {
        "code": code,
        "row": formatCondition.row,
        "type": formatState,
        "CSV": {
            "include_header": formatCondition.CSV.radio
        },
        "XML": {
            "room_element": formatCondition.XML.input,
            "record_element": formatCondition.XML.input2
        },
        "JSON": {
            "array": formatCondition.JSON.radio,
            "include_null_values": formatCondition.JSON.radio2
        },
        "SQL": {
            "table_name": formatCondition.SQL.input,
            "include_create": formatCondition.SQL.radio
        }
    };

    try {
        const response = await axios.post('http://localhost:5000/sql', data);
        return response.data.result;
    } catch (error) {
        console.log(data)
        console.error('There was an error!', error);
        return 'There was an error!';
    }
};

export default generateSql;
