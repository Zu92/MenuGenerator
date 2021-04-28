import React,{Component} from "react"

import './App.css';
import Navigation from './components/navigation.js'
import {menus} from './menus.json'
import Formulario from './components/Formulario.js'
import Seccion from './components/Seccion.js'


class App extends Component{
  constructor(){
    super();
    this.state={
      menus
    }
    this.handleAddSeccion=this.handleAddSeccion.bind(this)
    this.handleRemoveSeccion=this.handleRemoveSeccion.bind(this)
    this.handleRemoveProducto=this.handleRemoveProducto.bind(this)
    this.handleRemoveOpcion=this.handleRemoveOpcion.bind(this)
    this.handleAddProducto=this.handleAddProducto.bind(this)
    this.handleAddOpcion=this.handleAddOpcion.bind(this)
    this.downloadMenu=this.downloadMenu.bind(this)
    this.changeSeccion=this.changeSeccion.bind(this)
    this.changeProducto=this.changeProducto.bind(this)
  }
  handleAddSeccion(seccion){
    
    this.setState(prevState => ({
      menus: [...prevState.menus, seccion]
    }))
  }
  handleRemoveSeccion(index){
    
    if( window.confirm("¿Seguro quieres borrar esta Sección y todos sus Productos?")){
      this.setState({
      menus: this.state.menus.filter((e,i)=>{
        return i !== index
      })
    })}}
  handleRemoveProducto(index,id){
    console.log(this.state.menus[index].productos[id])
    if( window.confirm(`¿Seguro quieres borrar el Producto y sus Opcionales`)){
      
      this.setState(this.state.menus[index].productos.splice(id, 1));
      }}
  handleRemoveOpcion(index,idp,ido){
    if( window.confirm("¿Seguro quieres borrar esta Opcion?")){

      this.setState(this.state.menus[index].productos[idp].opciones.splice(ido, 1));
      }}
  handleAddProducto(id,producto){
    this.setState(prevState=> (prevState.menus[id].productos.push(producto)))
      }    
    handleAddOpcion(ids,idp,opcion){
     this.setState(prevState=> (prevState.menus[ids].productos[idp].opciones.push(opcion)))
      }
     changeSeccion(id,cambioSeccion){
      var contador=0
      var arreglo = this.state;
      arreglo.menus.map((registro) => 
      
      {
        if (id === registro.ids) {
          arreglo.menus[contador].nombreSeccion= cambioSeccion;
        }
        contador++;
      return("")});
     
      this.setState({ arreglo })
      
         }
      changeProducto(ids,idp,nombreP,descripcionp,preciop){
        var contador=0
        var arreglo = this.state;
        arreglo.menus[ids].productos.map((registro) => 
        
        {
          if (idp === registro.idp) {
            arreglo.menus[ids].productos[contador].nombreProducto= nombreP;
            arreglo.menus[ids].productos[contador].descripcion= descripcionp;
            arreglo.menus[ids].productos[contador].precio= preciop;
          }
          contador++;
          return("")});
       
        this.setState({ arreglo })



      }
      downloadMenu() { 
        const jsonData=this.state
        let dataStr = JSON.stringify(jsonData);
        let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
        let exportFileDefaultName = 'Menu.json';
    
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();

      }


  
  render() {
  return (
    <div className="App"  onSubmit={e => { e.preventDefault(); }} >
        <Navigation titulo= "Generador de Menu" cantidadSecciones={this.state.menus.length}/>
        <Formulario onAddSeccion={this.handleAddSeccion}/>
    <div className="container"> 
        <Seccion cambios={this.changeSeccion} cambiop={this.changeProducto} seccion={this.state.menus} remove={this.handleRemoveSeccion} removeproducto={this.handleRemoveProducto} removeopcion={this.handleRemoveOpcion} addproducto={this.handleAddProducto} addOpcion={this.handleAddOpcion} />
    </div>
    <button className="btn btn-danger" onClick={this.downloadMenu.bind(this)}>
                  Descargar Menu
            </button>
    </div>
  );
  }
}
  

export default App;
