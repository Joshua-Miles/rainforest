import React from 'react'

const Header = ({total, value, handleChange}) => (
  <div>
    <h1>Rainforest TM</h1>
    <p>${total}</p>
    <br />
    <input type="textarea" value={value} onChange={handleChange}/>
    <br /><br /><br /><br />
  </div>
)

export default Header
