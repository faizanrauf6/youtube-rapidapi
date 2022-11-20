import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {maxResults: '50'},
  headers: {
    // 'X-RapidAPI-Key': '036fbae900mshe94178e4fc6a558p1e9bdbjsn8525298a108c',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  }
};

export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
