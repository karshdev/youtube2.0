import axios from "axios";
const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url:  BASE_URL,
  params: {part: 'snippet', videoId: 'M7FIvfx5J10',maxResults:'50'},
  headers: {
    'X-RapidAPI-Key': 'ee0ce13afamshe6de83e7d60b857p1baeeejsn85f2b4cde699',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
 export const fetchFromApi=async (url)=>{
const {data}=await axios.get(`${BASE_URL}/${url}`,options)

return data;
  }