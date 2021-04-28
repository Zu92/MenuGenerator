import React, { Component} from "react"
import Producto from './Producto.js'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,

} from "reactstrap";

class Seccion extends Component{
  constructor(){
    super();
    this.state={
    ids:"",
    nombreSeccion:"",
    nombreProducto: "",
    descripcion: "",
    precio:"",
    opciones:[],
    modalActualizar: false,
    mostrarProductos: true}
  this.handleInput=this.handleInput.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)
  this.mostrarModalActualizar=this.mostrarModalActualizar.bind(this)
  this.cerrarModalActualizar=this.cerrarModalActualizar.bind(this)
  this.handleEditName=this.handleEditName.bind(this)
  this.mostrarProductos=this.mostrarProductos.bind(this)

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
    handleSubmit(id){
      const idp=Math.floor(Math.random() * 10000) + 1
      const nuevoproducto={idp:idp,nombreProducto: this.state.nombreProducto, descripcion: this.state.descripcion, precio:this.state.precio, opciones: this.state.opciones}
      this.props.addproducto(id,nuevoproducto)
    }  
    mostrarModalActualizar(id,ns){
      this.setState({ 
        ids:id,
        nombreSeccion:ns,
        modalActualizar: true });
    };

    cerrarModalActualizar(){
      this.setState({ modalActualizar: false });
    };
    handleEditName(){
      this.props.cambios(this.state.ids,this.state.nombreSeccion)
      this.setState({modalActualizar:false})
    }
  
    mostrarProductos(){
      const mp=this.state.mostrarProductos
      this.setState({ 
        mostrarProductos: !mp});
    };
    render(){
        const secciones= this.props.seccion.map((menu,id)=>
        {
      
        return (
          <Card key={menu.ids}>
            <div className="card-header">
            <div className="row">
               <h3 className="col">{menu.nombreSeccion}</h3>
               <div className="col">                    
          <Button color="primary" onClick={this.mostrarModalActualizar.bind(this,menu.ids,menu.nombreSeccion)}>Editar Nombre</Button> 
          <Button color="secondary" onClick={this.mostrarProductos.bind(this)}>Ocultar/Mostrar Productos</Button> 
          <Modal isOpen={this.state.modalActualizar} >
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>
          <ModalBody >
            <FormGroup>
              <label>
                Nombre seccion: 
              </label>
              <input
                className="form-control"
                name="nombreSeccion"
                type="text"
                onChange={this.handleInput}
                placeholder={this.state.nombreSeccion}
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
                  
                   </div> 
                   </div> 
                   </div> 
            <div className="card-body">
              <Producto  isLoggedIn={this.state.mostrarProductos} cambio={this.props.cambiop} producto={menu.productos} removep={this.props.removeproducto} ids={id} removeo={this.props.removeopcion} addopcion={this.props.addOpcion} />
                    <div className="form-group">
                    <input type="text" onChange={this.handleInput} name="nombreProducto" className="form-control" placeholder="Nombre de Producto"></input>
                    </div>
                    <div className="form-group">
                    <input type="text" onChange={this.handleInput} name="descripcion" className="form-control" placeholder="Descripción de Producto"></input>
                    </div>
                    <div className="form-group">
                    <input type="number" min="0" onChange={this.handleInput} name="precio" className="form-control" placeholder="Precio"></input>
                    </div>
            </div>
            <button  type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this,id)}>
                   Agregar Nuevo Producto
            </button>            
            <div className="card-footer">
            <button  className="btn btn-danger" onClick={this.handleRemoveSeccion.bind(this,id)}> 
                  Borrar Sección
            </button>
            </div>
            </Card>
          )     
    })
return(secciones)
}}
export default Seccion;