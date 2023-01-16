import React, { Component } from 'react'
import "./TodoApp.css"
export default class TodoApp extends Component {

    state={
        inputText :"",
        iteams:[]
    };

handlechange=(event)=>{
 this.setState({
    inputText : event.target.value
 })
 
};

storeIteams =(event) =>{
    event.preventDefault()
const {inputText} =this.state;


this.setState({
    iteams:[...this.state.iteams,inputText]
    
})
}



  render() {

    const {inputText,iteams} = this.state
   
    return (
      <div className='Todo-Container'>
       

        <form className='input-section' onSubmit={this.storeIteams}>  
          <h1>Todo APP</h1>
            <input type="text" 
         value={inputText}
           style={{fontSize:20}} 
           onChange={this.handlechange}
             placeholder="Enter Iteams...." />
            
      
        </form>
          

        <ul>
     {iteams.map((data, index)=>(

      
        <li key={index}>{data}<i className='fa fa-trash'></i></li>  

  ))}
  

        </ul> 
      </div>   
    )
  }
}
