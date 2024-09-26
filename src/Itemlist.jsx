import { useState,useEffect  } from "react";
function Item({name,isPacked}){
    return(<li>
        {name} {isPacked && '✓'}
    </li>)
}


export default function Itemlist(){
    const [keyword,setKeyword]=useState("");
    useEffect(()=>{
        console.log("this componet is loaded!");

        return()=>{
            alert("component unloaded!");
        }
    },[])

    const items= [{name:"Sunglass",isPacked:true},
        {name:"Sunblock",isPacked:false},
        {name:"Swimming suit",isPacked:true},
        {name:"Towel",isPacked:true},
        {name:"Powerbank",isPacked:false},
        {name:"ผ้าเช็ดตัว",isPacked:true}];

    const filterList=items.filter(i=>i.name.toLowerCase().includes(keyword.toLocaleLowerCase()))
    const Itemlist=filterList.map(i=><Item key={i.name} 
        name={i.name} isPacked={i.isPacked}/>)
    return <ui>
        <input type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
        {Itemlist}
    </ui>
    

}