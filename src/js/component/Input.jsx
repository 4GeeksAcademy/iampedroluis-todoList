import {  useState } from "react";
import React from "react";




const Input = () =>{

let [listItem, setListItem] = useState([])






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

let lista = listItem.map((el)=> <div id="item"><li className="d-flex justify-content-between "><p className="mt-4 ms-4">{el}</p><a className="mt-3 pt-2" href="#" role="button" onClick={()=>deleteitem(el)} ><img  src='https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg' alt="" id="poke" /></a></li><hr /></div>)

    return (
        <div>
            <h1 >Todo</h1>
            <div className=" container" id="conatiner-lista">
            <div className="" id="conatiner-input">
            <input type="text" className="mt-4" onKeyDown={enter} placeholder="Algo que anotar?"  />
            </div>
            <div className="" id="container-items">
            <ul className="mt-2" id="lista">         
            {lista}
            <hr />
            </ul>
            

            <div className="d-flex justify-content-start text-light ps-4 pt-2" id="poke-list-foot"><p>Poke-List Items </p><p id="numberlist">{listItem.length}</p></div>
            </div>
            
            
            </div>

        </div>
    )
}

export default Input