// import { useEffect, useState } from "react";
// import Card from "./Card";


const Guide = () => {
    // const [datas,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('/data.js')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 m-5">
            <div className="card card-compact h-[400px] bg-base-100 shadow-xl">
   
   <figure><iframe width="560" height="315" src="https://www.youtube.com/embed/XPcajfG8zYY?si=gBXF-vC6hFO7yvYG" title="YouTube video player" ></iframe></figure>
 <div className="card-body">
   <h2 className="card-title">Styling Tips for Every Season</h2>
   <p>fashion styling</p>
  
 </div>
</div>
            </div>
        </div>
    );
};

export default Guide;