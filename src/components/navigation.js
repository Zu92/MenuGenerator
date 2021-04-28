import React, { Component} from "react"

class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
              <p className="text-white">
              {this.props.titulo}</p>
                  <span className="badge badge-pill badge-light ml-2">
                      Cantidad de Secciones: {this.props.cantidadSecciones}
                  </span>
                  
            </nav>
        )
    }
}
export default Navigation;