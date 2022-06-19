import axios from 'axios';

const apiKey = '4SHIJhHYYTGFtOaBgYd8hvoSaPozddnP'
// Con axios
export const getSearch = async(search) => {
    const {data:{data:gifs}} = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10`);
    return gifs;
}

// Con fetch

// export const getSearch = async(search) => {
//     const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10`);
//     const {data} = await response.json();
//     return data;
// }
