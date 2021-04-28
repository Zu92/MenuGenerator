import React, { Component} from "react"

class Opcion extends Component{
    handleRemoveopcion(id){
        const index=this.props.ids
        const idp=this.props.idp
        this.props.remove(index,idp,id)
      }  
    render(){
        const opcion= this.props.opciones.map((opcion,id)=>{return (
              <div className="row " key={opcion.ido}>
                <div className="col">
             {opcion.nombreOpcion}</div>
             <div className="col">
             Precio Adicional: {opcion.precioAdiconal}
             </div>
             <div className="col">
             <button className="btn btn-danger"
                 onClick={this.handleRemoveopcion.bind(this,id)}>
                 Borrar Opcion
               </button> 
               </div>
            </div>
            
            
            )     
        })
    if(this.props.isLoggedIn){
          return(
            
    opcion)}
    return("")
   
}}
export default Opcion;