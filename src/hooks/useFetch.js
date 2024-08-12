import { useEffect , useState } from 'react';

export const useFetch = (apiPath) => {

    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        async function fetchMovies() {
            const respone = await fetch(url);
            const json = await respone.json();
            setData(json.results);
        }
        fetchMovies();
    },[url]);

  return { data };
}
