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

deletebtn =(index)=>{

const allItams = this.state.iteams

allItams.splice(index,1)

this.setState({
    iteams:allItams
})

}


editbtn = (inde)=>{
    let edi = prompt("enter new text")
    const allItams = this.state.iteams

    allItams.shift(inde)

    this.setState({
        iteams:allItams
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

      
        <li key={index}>{data} <i onClick={()=>this.deletebtn(index)} className='fa fa-trash' style={{marginLeft:9}}> </i></li>  

  ))}
  

        </ul> 
 
      </div>   
    )
  }
}
