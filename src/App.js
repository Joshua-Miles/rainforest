import React from 'react';
import Header from './Components/Header'
import Product from './Components/Product'
import Search from './Components/Search'
import './Components/App.css';

class App extends React.Component {

  state = {
    products:[],
    total:0,
    filtered:[]
    }
  // fetch data
   componentDidMount(){
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(productsData =>{
      this.setState({
        products:productsData 
      })
    })
   }
 
   buy = (id, price) =>{
     //update browser
     this.setState({
       products: this.state.products.map(product => {
         if(product.id == id){
           //update db
           fetch(`http://localhost:3000/products/${id}`, {
             method:'PATCH',
             headers: {
                    'Content-Type': 'application/json'
                     },
             body:JSON.stringify({
                    "purchased":true
             })        
           })
           return {...product, purchased:true}
         }else{
           return product
         }
       }),
       total: this.state.total + price
     })
   }

   //reassign products in state
   searchByBrand = (value) =>{     
      this.setState({
        filtered: this.state.products.filter(product => product.brand == value)
      })
   }
 
   render(){
    return (
      <div className = "App">
          <Header total = {this.state.total}/>
          <Search searchByBrand = {this.searchByBrand}/>
          {this.state.filtered.length > 0? 
              this.state.filtered.map(product => <Product {...product} buy = {this.buy}/>)
              :
              this.state.products.map(product => <Product {...product} buy = {this.buy}/>) 
          }
      </div>
    );
   }
  
}

export default App;

/* 1.render a list of products and a header that displays the user's total. 
   2. When a user clicks "buy" on one of the cards, the total should update, increasing by the price of the item purchased. 
   Note: You should not be able to buy the same product twice.
   3. refactor to use a fetch request and json-server*/



