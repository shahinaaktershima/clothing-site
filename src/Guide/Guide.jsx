import { useEffect, useState } from "react";
import Card from "./Card";


const Guide = () => {
    const [datas,setData]=useState([]);
    useEffect(()=>{
        fetch('/data.js')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            
            <div className="grid grid-cols-4 gap-12 m-5">
                {
                    datas.map((data,index)=><Card data={data} key={index}></Card>)
                }
            </div>
        </div>
    );
};

export default Guide;