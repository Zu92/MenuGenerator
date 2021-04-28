import React, { Component } from 'react';

class Formulario extends Component {
    constructor(){
      super();
      this.state={
        ids:0,
        nombreSeccion: "",
        productos:[]
    }
    this.handleInput=this.handleInput.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
   }  

   handleInput(e){
    e.preventDefault()
    const {value, name} =e.target 
    this.setState({
      [name]: value
    })
   }
   
   handleSubmit(){
    const id=Math.floor(Math.random() * 10000) + 1
    this.setState(prevState=> (prevState.ids=id))
    this.props.onAddSeccion(this.state)}
   

   render() {
    const seccion= <div className="card" >
       <form className="card-body" >
          <div className="form-group" >
           <input type="text" onChange={this.handleInput}   name="nombreSeccion" className="form-control" placeholder="Nombre de Sección"></input>
          </div>
         
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)} >Agregar Nueva Seccion</button>
          
          </form>
         
       </div> 
    
    return (
      
seccion
    )
  }
}export default Formulario;