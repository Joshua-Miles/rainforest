import React from 'react'
import Header from './components/Header'
import ProductsContainer from './components/ProductsContainer'

export default class App extends React.Component {

  state = {
    products: [],
    value: ""
  }

  currentTotal = () => {
    return this.state.products
    .filter(product => product.purchased)
    .map(product => product.price)
    .reduce((acc, val) => acc + val, 0)
  }

  handleChange = (e) => {
    e.persist()
    this.setState({
      value: e.target.value
    })
  }

  sortProducts = () => {
    return this.state.products.filter(product => product.title.toLowerCase().includes(this.state.value))
  }

  toggleCart = (id) => {
    const currentItem = this.state.products.find( product => product.id === id)

    fetch(`http://localhost:3001/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        purchased: !currentItem.purchased
      })
    })

    this.setState({
      products: this.state.products.map(product => {
        return (product.id === id
          ? {...product, purchased: !product.purchased}
          : product)
      })
    })
  }

  componentDidMount() {
    fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(data => this.setState({ products: data }))
  }

  render() {
    return (
      <div>
        <Header value={this.state.value} total={this.currentTotal()} handleChange={this.handleChange}/>
        <div>
          <ProductsContainer products={this.sortProducts()} toggleCart={this.toggleCart}/>
        </div>
      </div>
    )
  }
}
