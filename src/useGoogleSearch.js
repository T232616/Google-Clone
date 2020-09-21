import React, { useEffect, useState } from 'react';
import API_KEY from './keys'; 
const CONTEXT_KEY = "eafcfa9dede5e0e07"; //This key instructs the app which searcEngine to
const useGoogleSearch = (term) => {
    const [data,setdata] = useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            ).then((search)=>{
                return search.json();
            }).then((result)=>{
                setdata(result);
            })
        }
        fetchData();
    },[term])
return {data};
}
export default useGoogleSearch;