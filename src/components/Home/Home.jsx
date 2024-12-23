import { useEffect, useState } from "react";

export function Home(){
    let [count,setCount]=useState(0);
    let [dark,setDark]=useState("bg-gray-800 text-white p-4 my-3");
    let [Light,setLight]=useState(" bg-white text-black p-4 my-3");
useEffect(()=>{
    if(count==0)return;
    console.log("hello");
    
},[count])
useEffect(()=>{
    return ()=>{
        console.log("close");
    }
})
    function change(){
        setCount(Math.floor(Math.random() * 100));
    }
    return (
        <>
        <h1>{count}</h1>
        <button onClick={change} className={count>50?dark:Light}>Change</button>
        </>
    )
}