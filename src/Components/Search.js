import React from 'react';

export default class Search extends React.Component{
   handleSubmit = (e) =>{
    e.preventDefault()   
    let value = e.target.children[1].value
    this.props.searchByBrand(value)
   }
    render(){
        return(
            <div>
                <form onSubmit = {(e) => this.handleSubmit(e)}>
                <lable>Search By Brand</lable>
                <input type = "text"/>
                <button>Submit</button> 
                </form>
            </div>
        )
    }
}