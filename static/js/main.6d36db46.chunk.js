(this.webpackJsonpmenugenerator=this.webpackJsonpmenugenerator||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"a":[{"ids":1,"nombreSeccion":"Pizzas","productos":[{"idp":1,"nombreProducto":"Pizza Muzzarella","descripcion":"Pizza de 8 porciones","precio":8,"opciones":[{"ido":1,"nombreOpcion":"+ Aceitunas","precio":"8"},{"ido":2,"nombreOpcion":"Pizza Mediana","precioAdiconal":"6"},{"ido":3,"nombreOpcion":"Pizza Chica","precioAdiconal":"4"}]},{"idp":2,"nombreProducto":"Pizza Fugazzeta","descripcion":"Pizza de 8 porciones","precio":"8","opciones":[{"ido":5,"nombreOpcion":"Pizza Grande","precioAdiconal":"8"},{"ido":6,"nombreOpcion":"Pizza Mediana","precioAdiconal":"6"},{"ido":7,"nombreOpcion":"Pizza Chica","precioAdiconal":"4"}]},{"idp":3,"nombreProducto":"Pizza Provolone","descripcion":"Pizza de 8 porciones","precio":"8","opciones":[{"ido":8,"nombreOpcion":"Pizza Grande","precioAdiconal":"8"},{"ido":9,"nombreOpcion":"Pizza Mediana","precioAdiconal":"6"},{"ido":10,"nombreOpcion":"Pizza Chica","precioAdiconal":"4"}]},{"idp":4,"nombreProducto":"Pizza Napolitana","descripcion":"Pizza de 8 porciones","precio":"8","opciones":[{"ido":11,"nombreOpcion":"Pizza Grande","precioAdiconal":"8"},{"ido":12,"nombreOpcion":"Pizza Mediana","precioAdiconal":"6"},{"ido":13,"nombreOpcion":"Pizza Chica","precioAdiconal":"4"}]},{"idp":5,"nombreProducto":"Pizza Calabrese","descripcion":"Pizza de 8 porciones","precio":"8","opciones":[{"ido":14,"nombreOpcion":"Pizza Grande","precioAdiconal":"8"},{"ido":15,"nombreOpcion":"Pizza Mediana","precioAdiconal":"6"},{"ido":16,"nombreOpcion":"Pizza Chica","precioAdiconal":"4"}]}]},{"ids":2,"nombreSeccion":"Empanadas","productos":[{"idp":6,"nombreProducto":"Empanadas de JQ","descripcion":"Empanada de JQ","precio":"8","opciones":[]},{"idp":7,"nombreProducto":"Empanada de Carne","descripcion":"Emapanda de Carne","precio":"8","opciones":[]}]}]}')},30:function(e,o,n){},31:function(e,o,n){},42:function(e,o,n){"use strict";n.r(o);var t=n(2),c=n(13),a=n.n(c),i=(n(30),n(24)),r=n(9),s=n(10),d=n(4),l=n(12),u=n(11),p=(n(31),n(1)),b=function(e){Object(l.a)(n,e);var o=Object(u.a)(n);function n(){return Object(r.a)(this,n),o.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(p.jsx)("p",{className:"text-white",children:this.props.titulo}),Object(p.jsxs)("span",{className:"badge badge-pill badge-light ml-2",children:["Cantidad de Secciones: ",this.props.cantidadSecciones]})]})}}]),n}(t.Component),h=n(23),m=n(14),j=function(e){Object(l.a)(n,e);var o=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=o.call(this)).state={ids:0,nombreSeccion:"",productos:[]},e.handleInput=e.handleInput.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(s.a)(n,[{key:"handleInput",value:function(e){e.preventDefault();var o=e.target,n=o.value,t=o.name;this.setState(Object(m.a)({},t,n))}},{key:"handleSubmit",value:function(){var e=Math.floor(1e4*Math.random())+1;this.setState((function(o){return o.ids=e})),this.props.onAddSeccion(this.state)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("form",{className:"card-body",children:[Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",onChange:this.handleInput,name:"nombreSeccion",className:"form-control",placeholder:"Nombre de Secci\xf3n"})}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.handleSubmit.bind(this),children:"Agregar Nueva Seccion"})]})})}}]),n}(t.Component),O=function(e){Object(l.a)(n,e);var o=Object(u.a)(n);function n(){return Object(r.a)(this,n),o.apply(this,arguments)}return Object(s.a)(n,[{key:"handleRemoveopcion",value:function(e){var o=this.props.ids,n=this.props.idp;this.props.remove(o,n,e)}},{key:"render",value:function(){var e=this,o=this.props.opciones.map((function(o,n){return Object(p.jsxs)("div",{className:"row ",children:[Object(p.jsx)("div",{className:"col",children:o.nombreOpcion}),Object(p.jsxs)("div",{className:"col",children:["Precio Adicional: ",o.precioAdiconal]}),Object(p.jsx)("div",{className:"col",children:Object(p.jsx)("button",{className:"btn btn-danger",onClick:e.handleRemoveopcion.bind(e,n),children:"Borrar Opcion"})})]},o.ido)}));return this.props.isLoggedIn?o:""}}]),n}(t.Component),v=n(43),f=n(49),x=n(44),P=n(45),z=n(46),S=n(47),g=function(e){Object(l.a)(n,e);var o=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=o.call(this)).state={idp:"",nombreProducto:"",descripcion:"",precio:"",nombreOpcion:"",precioAdiconal:"",modalActualizar:!1,mostrarOpciones:!0},e.handleInput=e.handleInput.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e.mostrarModalActualizar=e.mostrarModalActualizar.bind(Object(d.a)(e)),e.cerrarModalActualizar=e.cerrarModalActualizar.bind(Object(d.a)(e)),e.handleEditName=e.handleEditName.bind(Object(d.a)(e)),e.mostrarOpciones=e.mostrarOpciones.bind(Object(d.a)(e)),e}return Object(s.a)(n,[{key:"handleRemoveSeccion",value:function(e){this.props.remove(e)}},{key:"handleInput",value:function(e){var o=e.target,n=o.value,t=o.name;this.setState(Object(m.a)({},t,n))}},{key:"handleSubmit",value:function(e,o){var n={ido:Math.floor(1e4*Math.random())+1,nombreOpcion:this.state.nombreOpcion,precioAdiconal:this.state.precioAdiconal};this.props.addopcion(e,o,n)}},{key:"handleREmoveProducto",value:function(e){var o=this.props.ids;this.props.removep(o,e)}},{key:"mostrarModalActualizar",value:function(e){this.setState({idp:e.idp,nombreProducto:e.nombreProducto,descripcion:e.descripcion,precio:e.precio,modalActualizar:!0})}},{key:"cerrarModalActualizar",value:function(){this.setState({modalActualizar:!1})}},{key:"handleEditName",value:function(){this.props.cambio(this.props.ids,this.state.idp,this.state.nombreProducto,this.state.descripcion,this.state.precio),this.setState({modalActualizar:!1})}},{key:"mostrarOpciones",value:function(){var e=this.state.mostrarOpciones;this.setState({mostrarOpciones:!e})}},{key:"render",value:function(){var e=this,o=this.props.producto.map((function(o,n){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsx)("h3",{children:o.nombreProducto})}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsxs)("p",{children:["Descripci\xf3n:  ",o.descripcion]}),Object(p.jsxs)("p",{children:["Precio Orginal:  ",o.precio]}),Object(p.jsx)(v.a,{color:"primary",onClick:e.mostrarModalActualizar.bind(e,o),children:"Editar Producto"}),Object(p.jsx)(v.a,{color:"secondary",onClick:e.mostrarOpciones.bind(e),children:"Ocultar/Mostrar Opciones"}),Object(p.jsxs)(f.a,{isOpen:e.state.modalActualizar,children:[Object(p.jsx)(x.a,{children:Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"Editar Registro"})})}),Object(p.jsxs)(P.a,{children:[Object(p.jsxs)(z.a,{children:[Object(p.jsx)("label",{children:"Nombre Producto:"}),Object(p.jsx)("input",{className:"form-control",name:"nombreProducto",type:"text",onChange:e.handleInput,placeholder:e.state.nombreProducto})]}),Object(p.jsxs)(z.a,{children:[Object(p.jsx)("label",{children:"Descripcion:"}),Object(p.jsx)("input",{className:"form-control",name:"descripcion",type:"text",onChange:e.handleInput,placeholder:e.state.descripcion})]}),Object(p.jsxs)(z.a,{children:[Object(p.jsx)("label",{children:"Precio:"}),Object(p.jsx)("input",{className:"form-control",name:"precio",type:"number",min:"0",onChange:e.handleInput,placeholder:e.state.precio})]})]}),Object(p.jsxs)(S.a,{children:[Object(p.jsx)(v.a,{color:"primary",onClick:function(){return e.handleEditName()},children:"Editar"}),Object(p.jsx)(v.a,{color:"danger",onClick:function(){return e.cerrarModalActualizar()},children:"Cancelar"})]})]}),Object(p.jsx)(O,{isLoggedIn:e.state.mostrarOpciones,opciones:o.opciones,ids:e.props.ids,idp:n,remove:e.props.removeo}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",onChange:e.handleInput,name:"nombreOpcion",className:"form-control",placeholder:"Nombre de la opci\xf3n"})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"number",min:"0",onChange:e.handleInput,name:"precioAdiconal",className:"form-control",placeholder:"Precio Adicional"})}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary",onClick:e.handleSubmit.bind(e,e.props.ids,n),children:"Agregar Nueva Opci\xf3n"})]}),Object(p.jsx)("div",{className:"card-footer",children:Object(p.jsx)("button",{className:"btn btn-danger",onClick:e.handleREmoveProducto.bind(e,n),children:"Borrar Producto"})})]},o.idp)}));return this.props.isLoggedIn?o:""}}]),n}(t.Component),A=(n(22),n(48)),y=function(e){Object(l.a)(n,e);var o=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=o.call(this)).state={ids:"",nombreSeccion:"",nombreProducto:"",descripcion:"",precio:"",opciones:[],modalActualizar:!1,mostrarProductos:!0},e.handleInput=e.handleInput.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e.mostrarModalActualizar=e.mostrarModalActualizar.bind(Object(d.a)(e)),e.cerrarModalActualizar=e.cerrarModalActualizar.bind(Object(d.a)(e)),e.handleEditName=e.handleEditName.bind(Object(d.a)(e)),e.mostrarProductos=e.mostrarProductos.bind(Object(d.a)(e)),e}return Object(s.a)(n,[{key:"handleRemoveSeccion",value:function(e){this.props.remove(e)}},{key:"handleInput",value:function(e){var o=e.target,n=o.value,t=o.name;this.setState(Object(m.a)({},t,n))}},{key:"handleSubmit",value:function(e){var o={idp:Math.floor(1e4*Math.random())+1,nombreProducto:this.state.nombreProducto,descripcion:this.state.descripcion,precio:this.state.precio,opciones:this.state.opciones};this.props.addproducto(e,o)}},{key:"mostrarModalActualizar",value:function(e,o){this.setState({ids:e,nombreSeccion:o,modalActualizar:!0})}},{key:"cerrarModalActualizar",value:function(){this.setState({modalActualizar:!1})}},{key:"handleEditName",value:function(){this.props.cambios(this.state.ids,this.state.nombreSeccion),this.setState({modalActualizar:!1})}},{key:"mostrarProductos",value:function(){var e=this.state.mostrarProductos;this.setState({mostrarProductos:!e})}},{key:"render",value:function(){var e=this;return this.props.seccion.map((function(o,n){return Object(p.jsxs)(A.a,{children:[Object(p.jsx)("div",{className:"card-header",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h3",{className:"col",children:o.nombreSeccion}),Object(p.jsxs)("div",{className:"col",children:[Object(p.jsx)(v.a,{color:"primary",onClick:e.mostrarModalActualizar.bind(e,o.ids,o.nombreSeccion),children:"Editar Nombre"}),Object(p.jsx)(v.a,{color:"secondary",onClick:e.mostrarProductos.bind(e),children:"Ocultar/Mostrar Productos"}),Object(p.jsxs)(f.a,{isOpen:e.state.modalActualizar,children:[Object(p.jsx)(x.a,{children:Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"Editar Registro"})})}),Object(p.jsx)(P.a,{children:Object(p.jsxs)(z.a,{children:[Object(p.jsx)("label",{children:"Nombre seccion:"}),Object(p.jsx)("input",{className:"form-control",name:"nombreSeccion",type:"text",onChange:e.handleInput,placeholder:e.state.nombreSeccion})]})}),Object(p.jsxs)(S.a,{children:[Object(p.jsx)(v.a,{color:"primary",onClick:function(){return e.handleEditName()},children:"Editar"}),Object(p.jsx)(v.a,{color:"danger",onClick:function(){return e.cerrarModalActualizar()},children:"Cancelar"})]})]})]})]})}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)(g,{isLoggedIn:e.state.mostrarProductos,cambio:e.props.cambiop,producto:o.productos,removep:e.props.removeproducto,ids:n,removeo:e.props.removeopcion,addopcion:e.props.addOpcion}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",onChange:e.handleInput,name:"nombreProducto",className:"form-control",placeholder:"Nombre de Producto"})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"text",onChange:e.handleInput,name:"descripcion",className:"form-control",placeholder:"Descripci\xf3n de Producto"})}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"number",min:"0",onChange:e.handleInput,name:"precio",className:"form-control",placeholder:"Precio"})})]}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary",onClick:e.handleSubmit.bind(e,n),children:"Agregar Nuevo Producto"}),Object(p.jsx)("div",{className:"card-footer",children:Object(p.jsx)("button",{className:"btn btn-danger",onClick:e.handleRemoveSeccion.bind(e,n),children:"Borrar Secci\xf3n"})})]},o.ids)}))}}]),n}(t.Component),N=function(e){Object(l.a)(n,e);var o=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=o.call(this)).state={menus:h.a},e.handleAddSeccion=e.handleAddSeccion.bind(Object(d.a)(e)),e.handleRemoveSeccion=e.handleRemoveSeccion.bind(Object(d.a)(e)),e.handleRemoveProducto=e.handleRemoveProducto.bind(Object(d.a)(e)),e.handleRemoveOpcion=e.handleRemoveOpcion.bind(Object(d.a)(e)),e.handleAddProducto=e.handleAddProducto.bind(Object(d.a)(e)),e.handleAddOpcion=e.handleAddOpcion.bind(Object(d.a)(e)),e.downloadMenu=e.downloadMenu.bind(Object(d.a)(e)),e.changeSeccion=e.changeSeccion.bind(Object(d.a)(e)),e.changeProducto=e.changeProducto.bind(Object(d.a)(e)),e}return Object(s.a)(n,[{key:"handleAddSeccion",value:function(e){this.setState((function(o){return{menus:[].concat(Object(i.a)(o.menus),[e])}}))}},{key:"handleRemoveSeccion",value:function(e){window.confirm("\xbfSeguro quieres borrar esta Secci\xf3n y todos sus Productos?")&&this.setState({menus:this.state.menus.filter((function(o,n){return n!==e}))})}},{key:"handleRemoveProducto",value:function(e,o){console.log(this.state.menus[e].productos[o]),window.confirm("\xbfSeguro quieres borrar el Producto y sus Opcionales")&&this.setState(this.state.menus[e].productos.splice(o,1))}},{key:"handleRemoveOpcion",value:function(e,o,n){window.confirm("\xbfSeguro quieres borrar esta Opcion?")&&this.setState(this.state.menus[e].productos[o].opciones.splice(n,1))}},{key:"handleAddProducto",value:function(e,o){this.setState((function(n){return n.menus[e].productos.push(o)}))}},{key:"handleAddOpcion",value:function(e,o,n){this.setState((function(t){return t.menus[e].productos[o].opciones.push(n)}))}},{key:"changeSeccion",value:function(e,o){var n=0,t=this.state;t.menus.map((function(c){return e===c.ids&&(t.menus[n].nombreSeccion=o),n++,""})),this.setState({arreglo:t})}},{key:"changeProducto",value:function(e,o,n,t,c){var a=0,i=this.state;i.menus[e].productos.map((function(r){return o===r.idp&&(i.menus[e].productos[a].nombreProducto=n,i.menus[e].productos[a].descripcion=t,i.menus[e].productos[a].precio=c),a++,""})),this.setState({arreglo:i})}},{key:"downloadMenu",value:function(){var e=this.state,o=JSON.stringify(e),n="data:application/json;charset=utf-8,"+encodeURIComponent(o),t=document.createElement("a");t.setAttribute("href",n),t.setAttribute("download","Menu.json"),t.click()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",onSubmit:function(e){e.preventDefault()},children:[Object(p.jsx)(b,{titulo:"Generador de Menu",cantidadSecciones:this.state.menus.length}),Object(p.jsx)(j,{onAddSeccion:this.handleAddSeccion}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(y,{cambios:this.changeSeccion,cambiop:this.changeProducto,seccion:this.state.menus,remove:this.handleRemoveSeccion,removeproducto:this.handleRemoveProducto,removeopcion:this.handleRemoveOpcion,addproducto:this.handleAddProducto,addOpcion:this.handleAddOpcion})}),Object(p.jsx)("button",{className:"btn btn-danger",onClick:this.downloadMenu.bind(this),children:"Descargar Menu"})]})}}]),n}(t.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(o){var n=o.getCLS,t=o.getFID,c=o.getFCP,a=o.getLCP,i=o.getTTFB;n(e),t(e),c(e),a(e),i(e)}))};a.a.render(Object(p.jsx)(N,{}),document.getElementById("root")),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.6d36db46.chunk.js.map