var datos={};
var misDatos=(info)=>{
	  console.log(info);
	  datos.productos=info;
	  var html="";
	  html+="<h2>Productos</h2>";
	  html+="<table>";
	  html+="<tr>";
	  html+="<th>FOLIO</th>";
	  html+="<th>DESCRIPCION</th>";
	  html+="<th>TALLA</th>";
	  html+="<th>PRECIO</th>";
	  html+="</tr>";
	  html+="<tbody>";
	  datos.productos.map(producto=>{
		html+="<tr>";
		html+="<td>"+producto.folio+"</td>";
		html+="<td>"+producto.descripcion+"</td>";
		html+="<td>"+producto.talla+"</td>";
		html+="<td>"+producto.precio+"</td>";
		html+="</tr>";
	  });
	  html+="</tbody>";
	  html+="</table>";
	  document.getElementById("res").innerHTML=html;
};