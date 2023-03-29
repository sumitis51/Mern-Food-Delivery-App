import { useEffect, useState } from "react";

const useFetch=(url)=>{
const [state,setState]=useState();
const [loading,setLoading]=useState(false);

useEffect(()=>{
  const fetchData=async()=>{
    try{
        const response=await fetch(url);
        const json=await response.json();
        setState(json);
        setLoading(false);
    }catch{
       console.log('err')
    }finally{
        setLoading(true);
    }
  
  }
  fetchData();
},[url])

return [state,loading];
}
export { useFetch };