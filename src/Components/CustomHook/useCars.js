import { useEffect, useState } from "react";

const useCars = ()=>{
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        const url = 'https://stormy-woodland-63975.herokuapp.com/cars ';
        fetch(url).then(res=>res.json()).then(data=>setCars(data));
    },[])
    return [cars,setCars];
}
export default useCars;