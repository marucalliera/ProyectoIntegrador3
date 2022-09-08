import React, { Component } from 'react'
import './Header.css'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
}   

evitarSubmit(event){
  event.preventDefault();
}

cambios(event){
  this.setState({
    value: event.target.value
  }, () => this.props.filtrar(this.state.value))
}

render(){
  return (
    <header>
      <h1><img src="/img/hooves.png" alt="logo hooves" srcset="" /></h1> 
      <p>ASC/ DESC</p>
      <i className="fas fa-th" onClick={()=>this.props.cambiarOrientacion("card-container-row")}/>
      <i className="fas fa-align-justify" onClick={()=>this.props.cambiarOrientacion("card-container-column")} />
      <form onSubmit ={(event)=>this.evitarSubmit(event)} >
        <input type="text" name="search" id placeholder="Search" onChange={(event)=>this.cambios(event)} value={this.state.value} />
        <button className="searchSubmit" type="submit"><i className="fas fa-search" /></button>
      </form>
    </header>
  )
}}

export default Header;