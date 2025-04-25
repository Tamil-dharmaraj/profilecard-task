import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props)
        
        this.state={
            name:'',
            comment:'',
            choice:''
            
        }
    }

    handleNameChange =(event)=>{
        this.setState(
            {
                name:event.target.value
            }
        )
    }
    handleCommentChange =(event)=>{
        this.setState(
            {
                comment:event.target.value
            }
        )
    }
    onDropdownChange =(event)=>{
        this.setState(
            {
                choice:event.target.value
            }
        )
    }
  render() {
    return (
        <form >
            <div>
                <label>Name</label>
                <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                <label>Comment</label>
                <textarea type='text-area' value={this.state.comment} onChange={this.handleCommentChange} />
                <select value={this.state.choice}onChange={this.onDropdownChange}>
                    <option >name1</option>
                    <option >name2</option>
                    
                </select>
            </div>
        </form>
      
    )
  }
}

export default Form