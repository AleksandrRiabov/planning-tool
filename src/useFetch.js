import {useState,  useEffect} from "react";

const useFetch = (urlParams) => {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState({show: false, message: ""});
   const [data, setData] = useState(null);

   const fetchData = async(url) => {
      setLoading(true);
      try{
         const response = await fetch(url);
         const data = await response.json();
         setData(data);
         setError({show: false, message: ""});
      }catch(err){
         setError({show: true, message: err.message});
         console.log(err);
      }finally{
         setLoading(false);
      }
   }

  useEffect(() => {
    fetchData(urlParams);
  }, [urlParams])

   return { loading, error, data }
}


export default useFetch;