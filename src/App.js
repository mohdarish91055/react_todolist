import './App.css';
import {useState} from "react";

function App() {
  const [text,setText] = useState('');
  const [list,setList] = useState([]);
  function addItem(){
    if(text){
    const updateItem = [...list,text]
    setList(updateItem);
    console.log(updateItem);
    setText('');
    }
  }

  function remove(key){
    const removelist = list.filter((item,index)=>{
      return key!== index;
    })

    setList(removelist)
  }

  function removeAll(){
    setList([])
  }

  return (
    <div className="container">
      
      <h1 className='header'>To Do List</h1>
      <div className="input-sec">
      <input 
      className="inputbtn" type="text" placeholder='Enter your task'
      value={text} 
      onChange={(e)=>{setText(e.target.value)}}
      
      /> 
       <button className="addbtn" onClick={addItem}>+</button>
      </div>   
      <div className="task-list">
       {
        list.length>0 && <ul >
        {
          list.map((item,key)=>
            <li key={key} className='listItem'>
                  <span>{item}</span>
              <span>
                  <input type='checkbox'/>
                  <button onClick={()=>remove(key)}>X</button>
              </span>
              
            
            </li>
            
          )
        } 
     </ul>
       }
          
    </div>

    <div className='removeallbtn'>
      {
        list.length>1 && <button onClick={removeAll} >Remove All</button>
      }

    </div>
  
    </div>
   
  );
}

export default App;
