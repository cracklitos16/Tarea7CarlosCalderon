function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "Ejericio2Series.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("Serie");  
  let table="<tr>    <th>Nombre de la Serie</th><th>Categoria</th><th>Clasificacion</th><th>Temporadas</th><th>Episodios</th><th>Actores</th>   </tr>";
  for (let i = 0; i <x.length; i++) { 

    table += "<tr> <td>" + x[i].getElementsByTagName("NameSerie")[0].childNodes[0].nodeValue + "</td> ";

   
    table += "<td>" + x[i].getElementsByTagName("Categoria")[0].childNodes[0].nodeValue + "</td>";
    table += "<td>" + x[i].getElementsByTagName("Clasificacion")[0].childNodes[0].nodeValue + "</td>";
    table += "<td>" + x[i].getElementsByTagName("Seasons")[0].childNodes[0].nodeValue + "</td>";
    table += "<td>" + x[i].getElementsByTagName("Episodes")[0].childNodes[0].nodeValue + "</td>";

    table += "<td>";
    const a = x[i].getElementsByTagName("Actors");

    var maxLength=0;
    for(let y = 0; y < a[0].getElementsByTagName("Actor").length; y++){ 
      maxLength=y;
    }

    for(let y = 0; y < a[0].getElementsByTagName("Actor").length; y++){
      if(y==maxLength){
        table += a[0].getElementsByTagName("Actor")[y].childNodes[0].nodeValue;
        
      }else{
        table += a[0].getElementsByTagName("Actor")[y].childNodes[0].nodeValue + " , "; 
      }
    }
    table += "</td> </tr>";

  }
  document.getElementById("demo").innerHTML = table;
}
