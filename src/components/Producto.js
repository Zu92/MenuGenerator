import React, { Component} from "react"
import Opcion from './Opcion.js'

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,

} from "reactstrap";

class Producto extends Component{
  constructor(){
    super();
    this.state={
    idp:"",
    nombreProducto: "",
    descripcion: "",
    precio:"",
    nombreOpcion:"",
    precioAdiconal:"",
    modalActualizar: false,
    mostrarOpciones:true}
  this.handleInput=this.handleInput.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)
  this.mostrarModalActualizar=this.mostrarModalActualizar.bind(this)
  this.cerrarModalActualizar=this.cerrarModalActualizar.bind(this)
  this.handleEditName=this.handleEditName.bind(this)
  this.mostrarOpciones=this.mostrarOpciones.bind(this)
  
 }  
    handleRemoveSeccion(id){
        this.props.remove(id)
      }
    handleInput(e){
    const {value, name} =e.target 
    this.setState({
      [name]: value
    })
    }
    handleSubmit(ids,idp){
      const id=Math.floor(Math.random() * 10000) + 1
      const nuevaopcion={ido:id,nombreOpcion: this.state.nombreOpcion, precioAdiconal:this.state.precioAdiconal}
      this.props.addopcion(ids,idp,nuevaopcion)
    }    
    handleREmoveProducto(id){
        const index=this.props.ids
        this.props.removep(index,id)
      }  

      mostrarModalActualizar(producto){
        this.setState({ 
          idp:producto.idp,
          nombreProducto:producto.nombreProducto,
          descripcion:producto.descripcion,
          precio: producto.precio,
          modalActualizar: true });
      };
  
      cerrarModalActualizar(){
        this.setState({ modalActualizar: false });
      };
      handleEditName(){
        this.props.cambio(this.props.ids,this.state.idp,this.state.nombreProducto,this.state.descripcion,this.state.precio)
        this.setState({modalActualizar:false})
      }
      mostrarOpciones(){
        const mp=this.state.mostrarOpciones
        this.setState({ 
          mostrarOpciones: !mp});
      };
    render(){
        const producto= this.props.producto.map((producto,id)=>{return (
            <div className="card" key={producto.idp}>
             <div className="card-header">
               <h3>{producto.nombreProducto}</h3> 
             </div>
             <div className="card-body">
               <p>Descripción:  {producto.descripcion}</p>
               <p>Precio Orginal:  {producto.precio}</p>

               <Button color="primary" onClick={this.mostrarModalActualizar.bind(this,producto)}>Editar Producto</Button>
               <Button color="secondary" onClick={this.mostrarOpciones.bind(this)}>Ocultar/Mostrar Opciones</Button>  
               <Modal isOpen={this.state.modalActualizar} >
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>
          <ModalBody >
            <FormGroup>
              <label>
                Nombre Producto: 
              </label>
              <input
                className="form-control"
                name="nombreProducto"
                type="text"
                onChange={this.handleInput}
                placeholder={this.state.nombreProducto}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Descripcion: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleInput}
                placeholder={this.state.descripcion}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="number" min="0"
                onChange={this.handleInput}
                placeholder={this.state.precio}
              />
            </FormGroup>
            
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.handleEditName()}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
               <Opcion isLoggedIn={this.state.mostrarOpciones} opciones={producto.opciones} ids={this.props.ids} idp={id} remove={this.props.removeo}/>
                    <div className="form-group">
                    <input type="text" onChange={this.handleInput} name="nombreOpcion" className="form-control" placeholder="Nombre de la opción"></input>
                    </div>
                    <div className="form-group">
                    <input type="number" min="0" onChange={this.handleInput} name="precioAdiconal" className="form-control" placeholder="Precio Adicional"></input>
                    </div>
                    <button  type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this,this.props.ids,id)}>
                   Agregar Nueva Opción
            </button>    
                    </div>

             <div className="card-footer">
               <button className="btn btn-danger"
                 onClick={this.handleREmoveProducto.bind(this,id)}>
                 Borrar Producto
               </button>

             </div>
            </div>
            
            
            )     
        })
        if(this.props.isLoggedIn){
        return(
          
  producto)}
  return("")
}}
export default Producto;