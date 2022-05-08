import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const useCars = ()=>{
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const url = 'https://stormy-woodland-63975.herokuapp.com/cars ';
        fetch(url).then(res=>res.json()).then(data=>{
            setCars(data);
            setLoading(false)

        });
    },[])
    return [cars,setCars, loading,setLoading];
}
export default useCars;