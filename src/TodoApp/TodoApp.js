import React, { Component } from 'react'
import "./TodoApp.css"
export default class TodoApp extends Component {
  render() {
    return (
      <div className='Todo-Container'>
       

     


        <div className='input-section'>  
          <h1>Todo APP</h1>
            <input type="text" style={{fontSize:20}} placeholder="Enter Iteams...." />
            
      
        </div>
        <ul>
            <li>iteams</li>
            <li>iteams</li>
        </ul>
      </div>
    )
  }
}
