import {  useState } from "react";
import React from "react";




const Input = () =>{

let [listItem, setListItem] = useState([])

let [modal, setModal] = useState("")




function enter(e){

    if(e.key === 'Enter'){

        let str = e.target.value.trim()
        
        if(str === ""){
            alert("la tarea no puede estar vacia")
        }else{
            setListItem([... listItem , e.target.value.trim()])
            console.log(e.target.value)
            e.target.value = ""
        }


       
    }
    
    
    
}

console.log(listItem)

const deleteitem = (deleteel)=>{
    const newListItem = listItem.filter((el)=> el !== deleteel);
    setListItem(newListItem)
    
}

let lista = listItem.map((el)=> <li>{el}<a className="btn btn-primary" href="#" role="button" onClick={()=>deleteitem(el)} >Link</a></li>)

    return (
        <div>{modal}
            <h1>Todo List</h1>
            
            <input type="text"  onKeyDown={enter}  />
            <ul>
            {lista}
            </ul>
                <div></div>
            <p>{listItem.length}</p>

        </div>
    )
}

export default Input