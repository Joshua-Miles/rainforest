import React from 'react';

export default class Product extends React.Component{

    render(){
        return(
            <div className="productTile">
                <img style = {{textAlign:'center', width:'100px', height:'100px'}} src = {this.props.image_url}/><br/>
                <a className="header">{this.props.brand} ${this.props.price}</a>
                <div style = {{width:'200px', height:'150px'}}className = "description">{this.props.title}</div>
                {!this.props.purchased? <button className="ui primary button" onClick = {() => this.props.buy(this.props.id, this.props.price)}>Buy</button> : <button className="ui disabled button">Already Purchased</button>}  
            </div>
            
        )
    }
} 