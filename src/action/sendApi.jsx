import axios from 'axios';

const replaceDummyData = async (originalData) => {
    let data = { ...originalData };  // create a copy of the original data
    for (let key in data) {
      if (typeof data[key] === 'object') {
        data[key] = await replaceDummyData(data[key]);
      } else if (typeof data[key] === 'string' && data[key].startsWith('f') && data[key].endsWith('f')) {
        const strippedData = data[key].substring(1, data[key].length - 1); // Remove the first and last 'f'
        const response = await axios.post('http://localhost:5000/api-generate', { data: strippedData });
        data[key] = response.data;
      }
    }
    return data;
  };

export const filterApi = async (url, rawBody, count) => {
  let result = [];
  let parsedBody = ''
  try {
    parsedBody = JSON.parse(rawBody);
  }
  catch(error) {
    return ['Invalid json format ' + error]
  }
  if (!parsedBody.someField) {
    return ['Invalid json format'];
  }

  for (let i = 0; i < count; i++) {
    try {
      const modifiedBody = await replaceDummyData(parsedBody);
      const response = await axios.post(url, modifiedBody);
      result.push(response.data);
    } catch (error) {
      console.error('There was an error!', error);
      result.push('There was an error in filter! ' + error);
    }
  }

  return result;
};

export default { filterApi };
