import { useEffect, useState } from "react";

const useCars = ()=>{
    const [cars, setCars] = useState();
    useEffect(()=>{
        const url = 'http://localhost:5000/cars ';
        fetch(url).then(res=>res.json()).then(data=>setCars(data));
    },[])
    return [cars,setCars];
}
export default useCars;